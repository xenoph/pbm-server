import React from 'react';
import styled from 'styled-components';

const LoginLayoutWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAPUlEQVQoU2NkIBIwEqmOAVmhMQMDw1k0jXAxfCaCFIEAWDMuhSiKcCnEUIRNIVZF6AqxKSLKMygBQHQ4AgA9HwgLjDSTggAAAABJRU5ErkJggg==);
	background-color: ${({ theme }) => theme.colors.neutral[3]};
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LoginLayoutPage = styled.div`
	position: relative;
	max-width: 900px;
	max-height: 600px;
	width: calc(100% - 24px);
	height: calc(100% - 24px);
	background: white;
	overflow: auto;
	box-shadow: 10px 9px 70px 0px rgba(0, 0, 0, 0.3);
`;

export default function LoginLayout({ children }) {
	return (
		<LoginLayoutWrapper>
			<LoginLayoutPage>{children}</LoginLayoutPage>
		</LoginLayoutWrapper>
	);
}
