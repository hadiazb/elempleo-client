import React, { Suspense } from 'react';
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

import useDecodeToken from '../hooks/useDecodeToken';

import { ROUTES, SHARED__ROUTES } from './routes';

const Router: React.FC = (props: any): JSX.Element => {
	const isLogged: boolean = useDecodeToken(
		props.loginReducer.login
	);

	return (
		<Routes>
			<Layout isLogged={isLogged}>
				<Suspense fallback={<p>Cargando......</p>}>
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
						{SHARED__ROUTES.map(
							({ path, key, exact, component }) => (
								<Route
									key={key}
									exact={exact}
									component={component}
									path={path}
								/>
							)
						)}
						<Redirect to='/' />
					</Switch>
				</Suspense>
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
