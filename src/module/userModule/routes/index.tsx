import React from 'react';
import {
	BrowserRouter as Routes,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';

import {
	AuthenticatedRoute,
	UnauthenticatedRoute,
} from './AuthRoute';
import Layout from '../components/Layout/Layout';
import Contact from '../views/Contact/page/Contact';

import useDecodeToken from '../hooks/useDecodeToken';

import {ROUTES} from './routes';

const Router: React.FC = (props: any): JSX.Element => {
	const isLogged: boolean = useDecodeToken(
		props.loginReducer.login
	);

	return (
		<Routes>
			<Layout isLogged={isLogged}>
				<Switch>
					{ROUTES.map(
						({ path, key, exact, component, auth }) => {
							const AuthRoute = auth
								? AuthenticatedRoute
								: UnauthenticatedRoute;
							return (
								<AuthRoute
									path={path}
									key={key}
									exact={exact}
									component={component}
									logged={isLogged}
								/>
							);
						}
					)}
					<Route exact component={Contact} path='/contactenos'/>
					<Redirect to='/' />
				</Switch>
			</Layout>
		</Routes>
	);
};

const mapStateToProps = ({ loginReducer }: any) => {
	return { loginReducer };
};

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Router);
