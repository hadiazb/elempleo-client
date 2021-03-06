import { types } from '../types/index';
import BannersService from '../../module/userModule/services/BannersService/BannersService';

export const getImages =
	() =>
	async (
		dispatch: (arg0: { type: string; payload?: any }) => void
	) => {
		dispatch({
			type: types.BANNER.LOADING,
		});
		try {
			const { data } = await BannersService.getAll();

			dispatch({
				type: types.BANNER.GET_BANNERS,
				payload: data.body,
			});
		} catch (error: any) {
			dispatch({
				type: types.BANNER.ERROR,
				payload: error,
			});
		}
	};
