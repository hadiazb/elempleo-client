import React from 'react';

export  interface RouteObject {
	path: string;
	key: string;
	exact: boolean;
	component: React.FC;
	auth: boolean;
}
export interface loginReducer {
	login: string | null;
	error: string;
	loading: boolean;
}
export  interface HeaderProps {
	isLogged: boolean;
	loginReducer: loginReducer
	signout: () => any;
}

export interface RoutesObject {
	routes: Routes;
}
export interface Routes {
	auth: Auth[];
	noAuth: Auth[];
	sharedRoutes: Auth[];
}
export interface Auth {
	path: string;
	key: string;
}
