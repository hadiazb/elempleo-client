import { types } from '../types';

interface Action {
	type: string;
	payload: any;
}

interface Banners {
	id: number;
	imgDesktop: string;
	imgMobile: string;
	imgDescription: string;
	title: string;
	subtitle: string;
}

interface State {
	banners: Banners[];
	loading: boolean;
	error: string;
}

const INITIAL_STATE: State = {
	banners: [],
	loading: false,
	error: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case types.BANNER.GET_BANNERS:
			return {
				...state,
				banners: action.payload,
				loading: false,
				error: '',
			};
		case types.BANNER.LOADING:
			return { ...state, loading: true };

		case types.BANNER.ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
