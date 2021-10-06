import { types } from '../types/index';
import UserService from '../../module/userModule/services/UsersService/UsersService';

export const getUsers = () => async (dispatch: any) => {
	dispatch({
		type: types.USERS.LOADING,
	});
	try {
		const { data } = await UserService.getAll();

		dispatch({
			type: types.USERS.GET_USERS,
			payload: data.body,
		});
	} catch (error: any) {
		dispatch({
			type: types.USERS.ERROR,
			payload: error.message,
		});
	}
};

export const registerUser =
	(submit: Object) => async (dispatch: any) => {
		dispatch({
			type: types.USERS.LOADING,
		});
		try {
			const { data } = await UserService.createUser(submit);

			dispatch({
				type: types.USERS.CREATE_USER,
				payload: data.body,
			});
		} catch (error: any) {
			dispatch({
				type: types.USERS.ERROR,
				payload: error.message,
			});
		}
	};
