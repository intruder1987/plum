import C from '../constants';

const initialState = {
	token: '',
	user: {},
	waitResponse: false,
	error: false
};

export default function(state, action){
	switch(action.type){
		case C.LOGIN:
			return {
		  	    ...state,
				waitResponse: true,
				error: false
		  	};
		case C.LOGIN_SUCCESS:
			return {
                ...state,
                token: action.result.token ? action.result.token : state.token,
                user: action.result.user ? action.result.user : state.user,
                waitResponse: false,
                error: false
            };
		case C.LOGOUT_SUCCESS:
			return initialState;
		default:
			return state || initialState;
	}
};