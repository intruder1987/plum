import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import BaseComponent from '../common/Base';
import Button from '../common/forms/Button';
import UploadedFile from '../common/UploadedFile';

const testFile = {
    name: 'test.pdf',
    type: 'application/pdf'
};

class AccessionSample extends BaseComponent {

    render() {

        return (
            <div className="accession-sample-container">
                <div className="order-container-id">
                    <div className="order-box">
                        <div className="title">RQ77451</div>
                    </div>
                </div>
                <div className="order-info-container">
                    <div className="header">
                        Lester Day
                    </div>
                    <div className="description">
                        <div className="field">
                            <div className="title">Date of birth</div>
                            <div className="value">07.08.1954</div>
                        </div>
                        <div className="field">
                            <div className="title">Biologic gender</div>
                            <div className="value">Male</div>
                        </div>
                        <div className="field">
                            <div className="title">Ethnicity</div>
                            <div className="value">Asian</div>
                        </div>
                    </div>
                </div>
                <div className="uploaded-file-container">
                    <UploadedFile
                        file={testFile}
                    />
                </div>
                <div className="button-container">
                    <Button
                        className="accession-button"
                        children={<div className="label-button">accession</div>}
                    />
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

export default connect(mapStateToProps, mapDispatchToProps)(AccessionSample);