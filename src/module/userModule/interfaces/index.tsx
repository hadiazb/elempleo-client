import React from 'react';

export interface RouteObject {
	path: string;
	key: string;
	exact: boolean;
	component: React.FC;
	auth: boolean;
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
