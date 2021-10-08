import { types } from '../types';

interface Action {
	type: string;
	payload: any;
}

interface State {
	universities: [];
	loading: boolean;
	error: string;
}

const INITIAL_STATE: State = {
	universities: [],
	loading: false,
	error: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case types.CAROUSEL.GET_CAROUSEL:
			return {
				...state,
				universities: action.payload,
				loading: false,
				error: '',
			};
		case types.CAROUSEL.LOADING:
			return { ...state, loading: true };

		case types.CAROUSEL.ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
