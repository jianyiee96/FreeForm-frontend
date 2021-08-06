import {
	StyledAppHeader,
	StyledApp,
	StyledButtonsContainer,
	StyledButtonContainer,
} from './AppStyles';
import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';

const App = (): JSX.Element => (
	<StyledApp>
		<StyledAppHeader>
			<Logo animate incName height="20vmin" />
			<StyledButtonsContainer>
				<StyledButtonContainer>
					<Button
						variant="contained"
						minHeight="3rem"
						minWidth="11rem"
						textTransform="capitalize"
					>
						Create
					</Button>
				</StyledButtonContainer>
				<StyledButtonContainer>
					<Button
						variant="outlined"
						minHeight="3rem"
						minWidth="11rem"
						textTransform="capitalize"
					>
						View
					</Button>
				</StyledButtonContainer>
			</StyledButtonsContainer>
		</StyledAppHeader>
	</StyledApp>
);

export default App;
