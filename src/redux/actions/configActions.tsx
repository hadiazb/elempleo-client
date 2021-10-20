import { types } from '../types/index';
import ConfigService from '../../module/userModule/services/ConfigService/ConfigService';

export const getConfig =
	() =>
	async (
		dispatch: (arg0: { type: string; payload?: any }) => void
	) => {
		dispatch({
			type: types.CONFIG.LOADING,
		});
		try {
			const { data } = await ConfigService.getAll();

			dispatch({
				type: types.CONFIG.GET_CONFIG,
				payload: data.body,
			});
		} catch (error: any) {
			dispatch({
				type: types.CONFIG.ERROR,
				payload: error,
			});
		}
	};
