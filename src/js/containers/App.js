import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';

class App extends Component {

    render() {
        const { location, children } = this.props;

        return <div className="app-container" >
            <div>
                test
            </div>
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