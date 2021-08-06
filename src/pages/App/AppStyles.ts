import styled from 'styled-components';
import { device } from '../../config/display';
import Logo from '../../components/Logo/Logo';

export const StyledApp = styled.div`
	text-align: center;
`;

export const StyledAppHeader = styled.header`
	background-color: ${(props) => props.theme.colors.secondary};
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${(props) => props.theme.colors.main};
`;

export const StyledLogo = styled(Logo)`
	@media ${device.mobileS} {
		height: 40vmin;
	}
	@media ${device.tablet} {
		height: 20vmin;
	}
`;

export const StyledButtonsContainer = styled.div`
	margin-top: 3rem;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const StyledButtonContainer = styled.div`
	padding: 1rem;
	margin: 0 1rem;
`;
