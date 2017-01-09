import C from '../../constants';

export default store => next => action => {
    const state = store.getState();
    localStorage.setItem(C.APP_NAME, JSON.stringify({
        auth: state.auth,
        router: state.router
    }));
    next(action);
}
