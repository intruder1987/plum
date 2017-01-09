import { combineReducers } from 'redux';
import appReducer from './App';

import C from '../constants';

let rootReducer = appReducer(
	combineReducers({

	})
);

export function resetState(state) {
  return {
    type: C.RESET_STATE,
    payload: state
  };
}

export default rootReducer;
