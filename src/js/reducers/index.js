import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import appReducer from './App';
import authReducer from './Auth';

import C from '../constants';

let rootReducer = appReducer(
	combineReducers({
        auth: authReducer,
        router: routeReducer
	})
);

export function resetState(state) {
  return {
    type: C.RESET_STATE,
    payload: state
  };
}

export default rootReducer;
