import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import BaseComponent from '../common/Base';
import Button from '../common/forms/Button';
import TextInput from '../common/forms/TextInput';
import Select from '../common/forms/Select';

class NewOrder extends BaseComponent {

    render() {

        return (
            <div className="order-form-container">
                <div className="back-container">
                    <div className="icon-arrow-container">
                        <div className="icon-arrow-left2"></div>
                    </div>
                    <div className="back">
                        Back to orders
                    </div>
                </div>
                <div className="header-container">
                    <div className="header">new order</div>
                </div>
                <div className="person-first">
                    <div className="person-title">Person 1</div>
                    <div className="person-columns">
                        <div className="container-field">
                            <label>Last name</label>
                            <TextInput/>
                        </div>
                        <div className="container-field">
                            <label>First name</label>
                            <TextInput/>
                        </div>
                        <div className="container-field">
                            <label>Date of birth</label>
                            <TextInput/>
                        </div>
                    </div>
                    <div className="person-columns">
                        <div className="container-field">
                            <label>Biologic gender</label>
                            <Select/>
                        </div>
                        <div className="container-field">
                            <label>Ethnicity</label>
                            <Select/>
                        </div>
                    </div>
                </div>
                <div className="share-checkbox-container"></div>
                <div className="physician-info-container"></div>
                <div className="address-delivering-container"></div>
                <div className="requisition-container"></div>
                <div className="add-person-container"></div>
                <div className="send-package-container"></div>
                <div className="submit-container"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewOrder);