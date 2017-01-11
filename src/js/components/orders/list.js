import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import BaseComponent from '../common/Base';
import LeftMenuItem from '../common/LeftMenuItem';
import SearchById from '../common/SearchById';
import Button from '../common/forms/Button';

class OrdersList extends BaseComponent {

    render() {

        return (
            <div>
                <LeftMenuItem
                    title="Waiting for action"
                    count="9"
                    isActive={true}
                />
                <LeftMenuItem
                    title="Order placed"
                    count="2"
                />
                <SearchById/>
                <Button
                    className="add-order-button"
                    children={<div className="label-button">create new order</div>}
                />
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