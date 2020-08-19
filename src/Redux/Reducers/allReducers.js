import { combineReducers } from 'redux';
import sideBarReducer from './sideBarReducer';
import contentReducer from './contentReducers';
import tabsReducer from './tabsReducer';

const allReducers = combineReducers({
	sideBarReducer,
	contentReducer,
	tabsReducer
});

export default allReducers;
