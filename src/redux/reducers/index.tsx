import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import loginReducer from './loginReducer';
import bannersReducer from './bannersReducer';
import carouselReducer from './carouselReducer';
import configReducer from './configReducer';

export default combineReducers({
	usersReducer,
	loginReducer,
	bannersReducer,
	carouselReducer,
	configReducer,
});
