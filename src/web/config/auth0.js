import React, { useState, useEffect, useContext } from 'react';
import { Auth0Client } from '@auth0/auth0-spa-js';
import env from 'web/config/env';

const DEFAULT_REDIRECT_CALLBACK = () => window.history.replaceState({}, document.title, window.location.pathname);

const auth0 = new Auth0Client({
	domain: env.PUBLIC_AUTH0_DOMAIN,
	client_id: env.PUBLIC_AUTH0_CLIENT_ID,
	cacheLocation: 'localstorage',
});

export default auth0;

export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext(Auth0Context);

// @see: https://auth0.com/docs/quickstart/spa/react/01-login#install-the-auth0-react-wrapper
export function Auth0Provider({ children, onRedirectCallback = DEFAULT_REDIRECT_CALLBACK }) {
	const [isAuthenticated, setIsAuthenticated] = useState();
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);
	const [popupOpen, setPopupOpen] = useState(false);

	useEffect(() => {
		const initAuth0 = async () => {
			if (window.location.search.includes('code=') && window.location.search.includes('state=')) {
				const { appState } = await auth0.handleRedirectCallback();
				onRedirectCallback(appState);
			}

			const isAuthenticated = await auth0.isAuthenticated();

			setIsAuthenticated(isAuthenticated);

			if (isAuthenticated) {
				const user = await auth0.getUser();
				setUser(user);
			}

			setLoading(false);
		};

		initAuth0();
	}, []);

	const loginWithPopup = async (params = {}) => {
		setPopupOpen(true);
		let loggedIn = false;

		try {
			await auth0.loginWithPopup(params);
			loggedIn = true;
		} catch (error) {
			console.error(error);
		} finally {
			setPopupOpen(false);
		}

		if (!loggedIn) {
			return;
		}

		const user = await auth0.getUser();

		setUser(user);
		setIsAuthenticated(true);
	};

	const handleRedirectCallback = async () => {
		setLoading(true);
		let loggedIn = null;

		loggedIn = await auth0.handleRedirectCallback();

		if (!loggedIn) {
			return;
		}

		const user = await auth0.getUser();

		console.log('loggedIn', loggedIn);

		setLoading(false);
		setIsAuthenticated(true);
		setUser(user);
	};

	return (
		<Auth0Context.Provider
			value={{
				isAuthenticated,
				user,
				loading,
				popupOpen,
				loginWithPopup,
				handleRedirectCallback,
				getIdTokenClaims: (...p) => auth0.getIdTokenClaims(...p),
				loginWithRedirect: (...p) => auth0.loginWithRedirect(...p),
				getTokenSilently: (...p) => auth0.getTokenSilently(...p),
				getTokenWithPopup: (...p) => auth0.getTokenWithPopup(...p),
				logout: (...p) => auth0.logout(...p),
			}}>
			{children}
		</Auth0Context.Provider>
	);
}

export function Authorized({ children }) {
	const { isAuthenticated } = useAuth0();

	if (!isAuthenticated) {
		return <div />;
	}

	return <>{children}</>;
}

export function UnAuthorized({ children }) {
	const { isAuthenticated } = useAuth0();

	if (isAuthenticated) {
		return <div />;
	}

	return <>{children}</>;
}
