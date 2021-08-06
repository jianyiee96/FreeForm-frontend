import {
	StyledAppHeader,
	StyledApp,
	StyledLogo,
	StyledButtonsContainer,
	StyledButtonContainer,
} from './AppStyles';
import Button from '../../components/Button/Button';

const App = (): JSX.Element => (
	<StyledApp>
		<StyledAppHeader>
			<StyledLogo animate incName />
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
