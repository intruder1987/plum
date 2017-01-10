import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import BaseComponent from './Base';

const menuItems = [
    {
        id: 1,
        title: 'orders',
        path: '/orders'
    },
    {
        id: 2,
        title: 'support',
        path: '/support'
    },
    {
        id: 3,
        title: 'the company',
        path: '/company'
    },
    {
        id: 4,
        title: 'contact',
        path: '/contact'
    }
];

class Menu extends BaseComponent {

    render() {
        const { path: currentPath } = this.props;
        return (
            <header>
                <nav role="navigation">
                    <a key="memu_0" className="logo" onClick={this.clickToLinkHandler.bind(null, '/')}>
                        plumcare
                    </a>
                    { menuItems.map(item => {
                        return <a key={"menu_" + item.id} className={item.path === currentPath && 'active'} onClick={this.clickToLinkHandler.bind(null, item.path)}>
                            <label>{item.title}</label>
                        </a>
                    })}
                    <a key="menu_user" className="user-logo">
                        <div className="user-photo">

                        </div>
                        <div className="user-description">
                            <div className="user-name">
                                Tyrion Lannister
                            </div>
                            <div className="user-status">Partner</div>
                        </div>
                        <div className="trigon">

                        </div>
                    </a>
                </nav>
            </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);