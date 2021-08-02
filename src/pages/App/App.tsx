import { StyledAppHeader, StyledApp } from './AppStyles';
import Logo from '../../components/Logo/Logo';

const App = (): JSX.Element => (
	<StyledApp>
		<StyledAppHeader>
			<Logo animate height="20vmin" />
			<p>
				Edit <code>src/App.tsx</code> and save to reload.
				<br />
				{process.env.REACT_APP_WEBSITE_NAME}
			</p>
		</StyledAppHeader>
	</StyledApp>
);

export default App;
