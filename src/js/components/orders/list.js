import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import BaseComponent from '../common/BaseComponent';
import LeftMenuItem from '../common/LeftMenuItem';
import SearchById from '../common/SearchById';
import Button from '../common/forms/Button';

const orderMenuItems = [
    {
        title: "Waiting for action",
        count: 9,
        isActive: true
    },
    {
        title: "Order placed",
        count: 2,
        isActive: false
    },
    {
        title: "Payment processed",
        count: 1,
        isActive: false
    },
    {
        title: "Kit sent to the customer",
        count: 5,
        isActive: false
    },
    {
        title: "Requistion ready",
        count: 7,
        isActive: false
    },
    {
        title: "Requistion ready",
        count: 7,
        isActive: false
    },
    {
        title: "Samples recieved",
        count: 1,
        isActive: false
    },
    {
        title: "Sent to the lab",
        count: 7,
        isActive: false
    },
    {
        title: "Samples at the Lab",
        count: 3,
        isActive: false
    },
    {
        title: "Results ready",
        count: 2,
        isActive: false
    },
    {
        title: "Report sent",
        count: 9,
        isActive: false
    }
];

const fields = ['Order ID', 'Name', 'Last updated', 'Status'];

const orders = [
    {
        id: 'OR1234',
        name: 'John Snow',
        updated: '04/22/2016',
        status: 'Order Paid'
    },
    {
        id: 'OR1234',
        name: 'John Snow',
        updated: '04/22/2016',
        status: 'Order Paid'
    },
    {
        id: 'OR1234',
        name: 'John Snow',
        updated: '04/22/2016',
        status: 'Order Paid'
    },
    {
        id: 'OR1234',
        name: 'John Snow',
        updated: '04/22/2016',
        status: 'Order Paid'
    },
    {
        id: 'OR1234',
        name: 'John Snow',
        updated: '04/22/2016',
        status: 'Order Paid'
    }
];

class OrdersList extends BaseComponent {

    render() {

        return (
            <div className="order-list-container">
                <div className="order-left-menu">
                    <Button
                        className="add-order-button"
                        children={<div className="label-button">create new order</div>}
                        onClick={this.clickToLinkHandler.bind(null, '/orders/new')}
                    />
                    <div className="left-menu-container">
                        {orderMenuItems.map((item, key) => {
                            return <LeftMenuItem
                                key={"left_menu_" + key}
                                title={item.title}
                                count={item.count}
                                isActive={item.isActive}
                            />
                        })}
                    </div>
                </div>
                <div className="order-list">
                    <div className="header">
                        {fields.map((field, key) => {
                            return <div key={"column_" + key} className="column">{field}</div>
                        })}
                        <SearchById/>
                    </div>
                    <div className="list-container">
                        {orders.map((order, key) => {
                            return <div key={"order_row_" + key} className="order-row">
                                <div className="order-id">{order.id}</div>
                                <div className="order-name">{order.name}</div>
                                <div className="order-updated">{order.updated}</div>
                                <div className="order-status">{order.status}</div>
                                <div className="details">See details</div>
                            </div>;
                        })}
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = function(state){
    return {
        auth: state.auth
    };
};

const mapDispatchToProps = (dispatch) => ({
    pushPath: function(path){ dispatch(pushPath(path)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList);