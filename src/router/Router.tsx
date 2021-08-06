import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import routes from '../config/routes';

const Router = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Switch>
				{routes.map(({ key, path, component, exact }) => (
					<Route component={component} key={key} path={path} exact={exact} />
				))}
				<Route path="/">
					<Redirect to="/" />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};
export default Router;
