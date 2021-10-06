import { types } from '../types';
import {getToken} from '../../utils/StorageUtil/StorageUtil';

interface Action {
	type: string;
	payload: any;
}

interface State {
	login: string | null,
	loading: boolean,
	error: string
}

const INITIAL_STATE: State = {
	login: getToken(),
	loading: false,
	error: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case types.LOGIN.LOGIN:
			return {
				...state,
				login: action.payload,
				loading: false,
				error: '',
			};
		case types.LOGIN.LOADING:
			return { ...state, loading: true };

		case types.LOGIN.ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
