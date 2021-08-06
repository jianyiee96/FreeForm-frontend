import styled from 'styled-components';

export const StyledApp = styled.div`
	text-align: center;
`;

export const StyledAppHeader = styled.header`
	background-color: ${(props) => props.theme.colors.secondary};
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: ${(props) => props.theme.colors.main};
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
