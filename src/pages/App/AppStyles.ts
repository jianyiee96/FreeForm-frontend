import styled, { keyframes } from 'styled-components';

const SpinAnimation = keyframes`
        from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const StyledApp = styled.div`
	text-align: center;
`;

export const StyledAppLogo = styled.img`
	height: 40vmin;
	pointer-events: none;
	@media (prefers-reduced-motion: no-preference) {
		animation: ${SpinAnimation} infinite 20s linear;
	}
`;

export const StyledAppHeader = styled.header`
	background-color: ${(props) => props.theme.colors.secondary};
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: ${(props) => props.theme.colors.primary};
`;
