import React from 'react';
import { Route } from 'react-router';
import App from '../containers/App';
import OrderList from '../components/orders/list';
import NewOrder from '../components/orders/new';

export default (
    <Route path="/" component={App}>
        <Route path="orders" component={OrderList} />
        <Route path="orders/new" component={NewOrder} />
    </Route>
);