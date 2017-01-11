import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import Menu from '../components/common/Menu';

class App extends Component {

    render() {
        const { location, children } = this.props;

        let paths = [];
        if (location && location.pathname) {
            paths = location.pathname.split('/');
        }

        return <div className="app-container" >
            <Menu path={"/" + paths[1] || ""} />
            <div className="page-container">
                {children}
            </div>
        </div>;
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    pushPath: function(path){ dispatch(pushPath(path)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);