import React from 'react';
import styled from 'styled-components';

const FullScreenLayoutWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAPUlEQVQoU2NkIBIwEqmOAVmhMQMDw1k0jXAxfCaCFIEAWDMuhSiKcCnEUIRNIVZF6AqxKSLKMygBQHQ4AgA9HwgLjDSTggAAAABJRU5ErkJggg==);
	background-color: ${({ theme }) => theme.colors.neutral[3]};
	overflow: auto;
`;

export default function FullScreenLayout({ children }) {
	return <FullScreenLayoutWrapper>{children}</FullScreenLayoutWrapper>;
}
