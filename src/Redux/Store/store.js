import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from '../Reducers/allReducers';
import reduxThunk from 'redux-thunk';

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
				{
					// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
				}
			)
		: compose;

export const store = createStore(allReducers, composeEnhancers(applyMiddleware(reduxThunk)));
