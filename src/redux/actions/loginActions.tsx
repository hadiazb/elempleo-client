import { types } from '../types/index';
import LoginService from '../../module/userModule/services/LoginService/LoginService';

import {
	setToken,
	getToken,
	deleteToken,
} from '../../utils/StorageUtil/StorageUtil';

export const login =
	(login: Object) => async (dispatch: any) => {
		dispatch({
			type: types.LOGIN.LOADING,
		});
		try {
			const { data } = await LoginService.login(login);

			setToken(data.body);

			dispatch({
				type: types.LOGIN.LOGIN,
				payload: getToken(),
			});
		} catch (error: any) {
			console.log(error);
			dispatch({
				type: types.LOGIN.ERROR,
				payload: error.message,
			});
		}
	};

export const signout =
	() =>
	(dispatch: any): void => {
		dispatch({
			type: types.LOGIN.LOADING,
		});
		try {
			deleteToken();
			dispatch({
				type: types.LOGIN.LOGIN,
				payload: getToken(),
			});
		} catch (error: any) {
			dispatch({
				type: types.LOGIN.ERROR,
				payload: error.message,
			});
		}
	};
