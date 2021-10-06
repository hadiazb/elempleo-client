import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface AuthRouteTypes {
	component: React.FC;
	path: string;
	exact: boolean;
	logged: boolean;
	authorized?: boolean;
}

const AuthComponent = ({
	component,
	path,
	exact,
	logged,
	authorized,
}: AuthRouteTypes): JSX.Element => {
	if (logged /*&& authorized*/) {
		return (
			<Route component={component} path={path} exact={exact} />
		);
	}

	return <Redirect to='/' />;
};

const NoAuthComponent = ({
	component,
	path,
	exact,
	logged,
	authorized,
}: AuthRouteTypes): JSX.Element => {
	if (logged /*&& authorized*/) {
		return <Redirect to='/home' />;
	}
	return (
		<Route component={component} path={path} exact={exact} />
	);
};

/*
  AuthenticatedRoute
  should be used for routes which require authentication
*/
export const AuthenticatedRoute = AuthComponent;

/*
  AuthenticatedRoute
  should be used for routes which not require authentication
*/
export const UnauthenticatedRoute = NoAuthComponent;
