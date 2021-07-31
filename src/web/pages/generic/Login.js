import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from 'web/config/auth0';
import LoginLayout from 'web/components/layouts/LoginLayout';

const LeftColumn = styled.div`
	position: absolute;
	left: 0;
	width: 50%;
	top: 0;
	bottom: 0;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const RightColumn = styled.div`
	position: absolute;
	right: 0;
	width: 50%;
	top: 0;
	bottom: 0;
	text-align: center;
	background: url(/19c9587b0747e60f.png) no-repeat center center;
	background-size: cover;
`;

export default function Login() {
	const history = useHistory();
	const { loginWithPopup, loginWithRedirect } = useAuth0();

	return (
		<LoginLayout>
			<LeftColumn>
				<div>
					<p>Velkommen!</p>

					<button
						onClick={async () => {
							await loginWithPopup();

							/**
							 * Login with redirect is also possible.
							 * await loginWithRedirect();
							 */

							history.push('/');
						}}>
						Login
					</button>
				</div>
			</LeftColumn>
			<RightColumn></RightColumn>
		</LoginLayout>
	);
}
