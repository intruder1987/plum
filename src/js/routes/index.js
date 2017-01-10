import React from 'react';
import { Route } from 'react-router';
import App from '../containers/App';
import OrderList from '../components/orders/list';

export default (
    <Route path="/" component={App}>
        <Route path="orders" component={OrderList} />
    </Route>
);