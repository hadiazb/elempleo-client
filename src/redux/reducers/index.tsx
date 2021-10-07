import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import loginReducer from './loginReducer';
import bannersReducer from './bannersReducer';

export default combineReducers({
	usersReducer,
	loginReducer,
	bannersReducer
});
