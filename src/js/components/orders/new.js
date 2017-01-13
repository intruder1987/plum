import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';
import BaseComponent from '../common/Base';
import Button from '../common/forms/Button';
import TextInput from '../common/forms/TextInput';
import Select from '../common/forms/Select';
import Checkbox from '../common/forms/Checkbox';
import FileInput from '../common/forms/FileInput';
import UploadedFile from '../common/UploadedFile';

class NewOrder extends BaseComponent {

    state = {

    }

    uploadFile = (field) => {
        return (files) => {
            if (files && files[0]) {
                this.setState({
                    ...this.state,
                    [field]: files[0]
                });
            }
        }
    }

    removeFile = (field) => {
        return () => {
            this.setState({
                ...this.state,
                [field]: null
            });
        }
    }

    render() {
        const { requisitionFile = null, consentFile = null } = this.state;

        return (
            <div className="order-container">
                <div className="back-container">
                    <div className="icon-arrow-container">
                        <div className="icon-arrow-left2"></div>
                    </div>
                    <div className="back" onClick={this.clickToLinkHandler.bind(null, '/orders')}>
                        Back to orders
                    </div>
                </div>
                <div className="header-container">
                    <div className="header">new order</div>
                </div>
                <div className="order-form-container">
                    <div className="person-first">
                        <div className="person-title">Person 1</div>
                        <div className="column-form">
                            <div className="container-field">
                                <label>Last name</label>
                                <TextInput/>
                            </div>
                            <div className="container-field">
                                <label>First name</label>
                                <TextInput/>
                            </div>
                        </div>
                        <div className="column-form">
                            <div className="container-field">
                                <label>Kit ID</label>
                                <TextInput/>
                            </div>
                        </div>
                    </div>
                    <div className="share-checkbox-container">
                        <div className="empty-block"></div>
                        <Checkbox
                            children="Share results with family Physician or other licensed healthcare professional caring for client"
                        />
                    </div>
                    <div className="physician-info-container">
                        <div className="empty-block"></div>
                        <div className="column-form">
                            <div className="container-field">
                                <label>Physician Name Last, First, Degree</label>
                                <TextInput/>
                            </div>
                            <div className="container-field">
                                <label>E-mail</label>
                                <TextInput/>
                            </div>
                        </div>
                        <div className="column-form">
                            <div className="container-field">
                                <label>Phone</label>
                                <TextInput/>
                            </div>
                            <div className="container-field">
                                <label>Fax</label>
                                <TextInput/>
                            </div>
                        </div>
                    </div>
                    <div className="address-delivering-container">
                        <div className="address-delivering-title">Address for delivering kits</div>
                        <div className="column-form">
                            <div className="container-field">
                                <label>Address line 1</label>
                                <TextInput/>
                            </div>
                            <div className="container-field">
                                <label>Address line 2</label>
                                <TextInput/>
                            </div>
                            <div className="container-field">
                                <label>City</label>
                                <TextInput/>
                            </div>
                        </div>
                        <div className="column-form">
                            <div className="container-field">
                                <label>State/Province</label>
                                <Select/>
                            </div>
                            <div className="container-field">
                                <label>Zip/Postal code</label>
                                <TextInput/>
                            </div>
                            <div className="container-field">
                                <label>Country</label>
                                <TextInput/>
                            </div>
                        </div>
                    </div>
                    <div className="requisition-container">
                        <div className="requisition-title">Upload requisition and consent</div>
                        <div className="column-form">
                            <div className="container-field">
                                <label>Requisition</label>
                            </div>
                            <div className="container-field">
                                <label>Consent</label>
                            </div>
                        </div>
                        <div className="column-form">
                            <div className="container-field">
                                {requisitionFile
                                    ? <UploadedFile
                                        file={requisitionFile}
                                        onRemove={this.removeFile('requisitionFile')}
                                    />
                                    : <Button
                                        className="upload-button"
                                        children={
                                            <div>
                                                <div className="label-button">upload</div>
                                                <FileInput
                                                    className="button-file-input"
                                                    onChange={this.uploadFile('requisitionFile')}
                                                />
                                            </div>
                                        }
                                    />
                                }
                            </div>
                            <div className="container-field">
                                {consentFile
                                    ? <UploadedFile
                                        file={consentFile}
                                        onRemove={this.removeFile('consentFile')}
                                    />
                                    : <Button
                                        className="upload-button"
                                        children={
                                            <div>
                                                <div className="label-button">upload</div>
                                                <FileInput
                                                    className="button-file-input"
                                                    onChange={this.uploadFile('consentFile')}
                                                />
                                            </div>
                                        }
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add-person-container">
                    <div className="add-person-link">+ Add a person</div>
                </div>
                <div className="send-package-container">
                    <div className="title">Send the package and submit the tracking number</div>
                    <div className="description"><div>Sara Anderson</div> 21/F., One Kowloon, 1 Wang Yuen Street, Kowloon Bay, Hong Kong</div>
                    <div className="column-form">
                        <div className="container-field">
                            <label>Postal tracking number</label>
                            <TextInput/>
                        </div>
                    </div>
                </div>
                <div className="submit-container">
                    <Button
                        className="submit-button"
                        children={<div className="label-button">submit</div>}
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

export default connect(mapStateToProps, mapDispatchToProps)(NewOrder);