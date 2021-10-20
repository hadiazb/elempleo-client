import React, {
	Suspense,
	useEffect,
} from 'react';
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
import Spinner from '../components/Spinner/Spinner';

import { getUser } from '../../../redux/actions/usersActions';
import useDecode from '../hooks/useDecode';

import { ROUTES, SHARED__ROUTES } from './routes';

const Router: React.FC<RouterProps> = ({
	loginReducer,
	usersReducer,
	getUser,
}): JSX.Element => {
	const { isLogged, decodedToken } = useDecode(
		loginReducer.login
	);

	useEffect(() => {
		(async () => {
			if (decodedToken) {
				await getUser(decodedToken.id);
			}
		})();
	}, [decodedToken, getUser]);

	return (
		<Routes>
			<Layout
				isLogged={isLogged}
				role={
					usersReducer.user.length > 0
						? usersReducer.user[0].role
						: null
				}
			>
				<Suspense fallback={<Spinner height='90vh' />}>
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

const mapStateToProps = ({
	loginReducer,
	usersReducer,
}: any) => {
	return { loginReducer, usersReducer };
};

const mapDispatchToProps = { getUser };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Router);

interface RouterProps {
	loginReducer: loginReducer;
	usersReducer: usersReducer;
	getUser: any;
}

interface loginReducer {
	login: string | null;
	loading: boolean;
	error: string;
}

interface usersReducer {
	users: [];
	user: [user];
	loading: boolean;
	error: string;
}

interface user {
	address: string | null;
	age: number | null;
	avatar: string | null;
	city: string | null;
	company: string | null;
	country: string | null;
	createdAt: string;
	email: string;
	id: number;
	name: string | null;
	phone: string;
	picture: string | null;
	role: number;
	updatedAt: string;
	username: string;
	website: string | null;
	zipcode: string | null;
}
