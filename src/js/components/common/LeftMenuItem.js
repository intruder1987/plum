import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import BaseComponent from './Base';

class LeftMenuItem extends BaseComponent {

    render() {
        const { title, count, isActive } = this.props;

        return (
            <div className={isActive ? 'left-menu-item-container active' : 'left-menu-item-container'}>
                <div className="title">
                    {title}
                </div>
                <div className="counter-container">
                    <div className="counter">
                        {count}
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

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenuItem);