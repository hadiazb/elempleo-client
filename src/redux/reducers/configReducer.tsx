import { types } from '../types';

interface Action {
	type: string;
	payload: any;
}

interface Config {
	timeBanner: number;
	timeCarousel: number;
	captchaId: string;
	captchaVisible: boolean;
}

interface State {
	config: Config[];
	loading: boolean;
	error: string;
}

const INITIAL_STATE: State = {
	config: [],
	loading: false,
	error: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case types.CONFIG.GET_CONFIG:
			return {
				...state,
				config: action.payload,
				loading: false,
				error: '',
			};
		case types.CONFIG.LOADING:
			return { ...state, loading: true };

		case types.CONFIG.ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
