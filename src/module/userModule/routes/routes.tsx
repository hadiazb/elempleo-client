import React from 'react';

import { RouteObject } from '../interfaces/index';
import { config } from '../../../config';
import { filterRoute } from '../../../utils/FilterRoute/FilterRoute';

const {
	REACT_APP_HOME_AUTH_KEY,
	REACT_APP_HOME_NOAUTH_KEY,
	REACT_APP_HOME_LOGIN_KEY,
	REACT_APP_HOME_REGISTER_KEY,
	REACT_APP_HOME_CONTACT_KEY,
}: any = process.env;

export const ROUTES: RouteObject[] = [
	{
		path: filterRoute(
			config.routes.noAuth,
			REACT_APP_HOME_NOAUTH_KEY
		),
		key: REACT_APP_HOME_NOAUTH_KEY,
		exact: true,
		component: React.lazy(
			() => import('../views/HomeAnonymous/page/HomeAnonymous')
		),
		auth: false,
	},
	{
		path: filterRoute(
			config.routes.noAuth,
			REACT_APP_HOME_LOGIN_KEY
		),
		key: REACT_APP_HOME_LOGIN_KEY,
		exact: true,
		component: React.lazy(
			() => import('../views/Login/page/Login')
		),
		auth: false,
	},
	{
		path: filterRoute(
			config.routes.auth,
			REACT_APP_HOME_AUTH_KEY
		),
		key: REACT_APP_HOME_AUTH_KEY,
		exact: true,
		component: React.lazy(
			() =>
				import(
					'../views/HomeAuthenticate/page/HomeAuthenticate'
				)
		),
		auth: true,
	},
	{
		path: filterRoute(
			config.routes.noAuth,
			REACT_APP_HOME_REGISTER_KEY
		),
		key: REACT_APP_HOME_REGISTER_KEY,
		exact: true,
		component: React.lazy(
			() => import('../views/Register/page/Register')
		),
		auth: false,
	},
];

export const SHARED__ROUTES: RouteObject[] = [
	{
		path: filterRoute(
			config.routes.sharedRoutes,
			REACT_APP_HOME_CONTACT_KEY
		),
		key: REACT_APP_HOME_CONTACT_KEY,
		exact: true,
		component: React.lazy(
			() => import('../views/Contact/page/Contact')
		),
		auth: false,
	},
];
