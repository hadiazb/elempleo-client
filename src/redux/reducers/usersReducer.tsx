import { types } from '../types';

interface Action {
	type: string;
	payload: any;
}

interface State {
	users: [];
	user: {}
	loading: boolean;
	error: string;
}

const INITIAL_STATE: State = {
	users: [],
	user: {},
	loading: false,
	error: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case types.USERS.CREATE_USER:
			return {
				...state,
				user: action.payload,
				loading: false,
				error: '',
			};
		case types.USERS.GET_USERS:
			return {
				...state,
				users: action.payload,
				loading: false,
				error: '',
			};
		case types.USERS.LOADING:
			return { ...state, loading: true };

		case types.USERS.ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
