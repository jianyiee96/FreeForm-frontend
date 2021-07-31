import logo from '../../assets/svgs/logo.svg';
import { StyledAppHeader, StyledAppLogo, StyledApp } from './AppStyles';

const App = (): JSX.Element => (
	<StyledApp className="App">
		<StyledAppHeader className="App-header">
			<StyledAppLogo src={logo} className="App-logo" alt="logo" />
			<p>
				Edit <code>src/App.tsx</code> and save to reload.
				<br />
				{process.env.REACT_APP_WEBSITE_NAME}
			</p>
		</StyledAppHeader>
	</StyledApp>
);

export default App;
