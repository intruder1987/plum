import { applyMiddleware, createStore } from 'redux';

//import InitialState from './initialstate';
import RootReducer from '../reducers';
import clientMiddleware from './middleware/clientMiddleware';
import localStorageLoad from './middleware/localStorageLoad';
import localStorageDump from './middleware/localStorageDump';

// A super-simple logger
let logger = store => next => action => {
	if (action.type) {
		console.log('dispatching', action.type,action);
	}
	let result = next(action);
	if (action.type) {
		console.log('next state', store.getState());
	}
	return result;
};

export default function makeStore(apiClient, initialState) {
	const middleware = [localStorageLoad, clientMiddleware(apiClient), localStorageDump, logger];
	let finalCreateStore = applyMiddleware(...middleware)(createStore);
	return finalCreateStore(RootReducer, initialState);
};
