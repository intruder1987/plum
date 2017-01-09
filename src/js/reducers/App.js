import C from '../constants';

export default function appReducer(subReducer) {
    return (state, action) => {
        switch(action.type) {
            case C.RESET_STATE:
                return action.payload;
            default:
                return subReducer(state, action);
        }
    }
}
