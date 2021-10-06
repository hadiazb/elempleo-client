import { RoutesObject } from '../module/userModule/interfaces/index';

const {
	REACT_APP_HOME_AUTH,
	REACT_APP_HOME_AUTH_KEY,
	REACT_APP_HOME_NOAUTH,
	REACT_APP_HOME_NOAUTH_KEY,
	REACT_APP_HOME_LOGIN,
	REACT_APP_HOME_LOGIN_KEY,
	REACT_APP_HOME_REGISTER,
	REACT_APP_HOME_REGISTER_KEY,
	REACT_APP_HOME_CONTACT,
	REACT_APP_HOME_CONTACT_KEY,
}: any = process.env;

export const config: RoutesObject = {
	routes: {
		auth: [
			{
				path: REACT_APP_HOME_AUTH,
				key: REACT_APP_HOME_AUTH_KEY,
			},
		],
		noAuth: [
			{
				path: REACT_APP_HOME_NOAUTH,
				key: REACT_APP_HOME_NOAUTH_KEY,
			},
			{
				path: REACT_APP_HOME_LOGIN,
				key: REACT_APP_HOME_LOGIN_KEY,
			},
			{
				path: REACT_APP_HOME_REGISTER,
				key: REACT_APP_HOME_REGISTER_KEY,
			},
		],
		sharedRoutes: [
			{
				path: REACT_APP_HOME_CONTACT,
				key: REACT_APP_HOME_CONTACT_KEY,
			},
		],
	},
};
