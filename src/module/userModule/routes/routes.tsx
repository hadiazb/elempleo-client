import HomeAnonymous from '../views/HomeAnonymous/page/HomeAnonymous';
import Login from '../views/Login/page/Login';
import HomeAuthenticate from '../views/HomeAuthenticate/page/HomeAuthenticate';
import Register from '../views/Register/page/Register';

import {RouteObject} from '../interfaces/index';

export const ROUTES: RouteObject[] = [
	{
		path: '/',
		key: 'home',
		exact: true,
		component: HomeAnonymous,
		auth: false,
	},
	{
		path: '/login',
		key: 'login',
		exact: true,
		component: Login,
		auth: false,
	},
	{
		path: '/home',
		key: 'home',
		exact: true,
		component: HomeAuthenticate,
		auth: true,
	},
	{
		path: '/registrar',
		key: 'register',
		exact: true,
		component: Register,
		auth: false,
	},
];


