import C from '../../constants';

export default store => next => action => {
    const { type } = action;
    console.log(type);
    if (type === C.INIT_STORE) {
        try {
            const storedState = JSON.parse(localStorage.getItem(C.APP_NAME));
            console.log(storedState);
            if (storedState) {
                store.dispatch({
                    type: C.RESET_STATE,
                    payload: storedState
                });
            }
            return;
        } catch (e) {
            // Unable to load or parse stored state, proceed as usual
        }
    }
    next(action);
}
