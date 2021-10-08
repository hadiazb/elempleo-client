import { types } from '../types/index';
import UniversitiesService from '../../module/userModule/services/UniversitiesService/UniversitiesService';

export const getUniversities = () => async (dispatch: any) => {
	dispatch({
		type: types.CAROUSEL.LOADING,
	});
	try {
		const { data } = await UniversitiesService.getAll();

		dispatch({
			type: types.CAROUSEL.GET_CAROUSEL,
			payload: data.body,
		});
	} catch (error: any) {
		dispatch({
			type: types.CAROUSEL.ERROR,
			payload: error,
		});
	}
};
