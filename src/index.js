import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { syncReduxAndRouter } from 'redux-simple-router';

import routes from './js/routes';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import makeStore from './js/store/create';
// import ApiClient from './js/helpers/ApiClient';
// import FirebaseClient from './js/helpers/FirebaseClient';
import C from './js/constants';


const apiClient = new ApiClient();
const firebaseClient = new FirebaseClient();
const history = createBrowserHistory();
const store = makeStore(apiClient, firebaseClient, window.__INITIAL_STATE__);

store.dispatch({ type: C.INIT_STORE });
syncReduxAndRouter(history, store, (state) => state.router);

// Render the React application to the DOM
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                {routes}
            </div>
        </Router>
    </Provider>,
    document.getElementById('react-root')
);
