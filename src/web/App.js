import React, { lazy } from 'react';
import { ThemeProvider } from 'styled-components';

import { Authorized, UnAuthorized, useAuth0 } from 'web/config/auth0';
import GlobalStyling from 'web/components/GlobalStyling';
import THEME from 'web/theme';

const Login = lazy(() =>
    import(/* webpackChunkName: "login" */ 'web/pages/generic/Login')
);

import { Switch, Route } from 'react-router-dom';

function App() {
    const { logout } = useAuth0();

    return (
        <ThemeProvider theme={THEME}>
            <GlobalStyling />

            <Authorized>
                <button
                    onClick={() =>
                        logout({
                            returnTo:
                                window.location.protocol +
                                '//' +
                                window.location.host,
                        })
                    }>
                    Logout
                </button>
            </Authorized>

            <Authorized>
                <Switch></Switch>
            </Authorized>

            <UnAuthorized>
                <Switch>
                    <Route path="/" component={Login} />
                </Switch>
            </UnAuthorized>
        </ThemeProvider>
    );
}

export default App;
