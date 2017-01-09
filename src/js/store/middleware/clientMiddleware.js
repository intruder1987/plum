export default function clientMiddleware(apiClient, firebaseClient) {
    return ({dispatch, getState}) => {
        return next => action => {
            if (typeof action !== 'function') {

            } else {
                return action(dispatch, getState);
            }

            const { promise, types, ...rest } = action; // eslint-disable-line no-redeclare
            if (!promise) {
                return next(action);
            }

            const [REQUEST, SUCCESS, FAILURE] = types;
            const {auth} = getState();
            next({...rest, type: REQUEST});
            apiClient.token = auth.token;
            return promise(action.firebase ? firebaseClient: apiClient).then(
                    (result) => next({...rest, result, type: SUCCESS}),
                    (error) => {
                        next({...rest, error, type: FAILURE})
                    }
                ).catch((error)=> {
                    next({...rest, error, type: FAILURE});
            });
        };
    };
}
