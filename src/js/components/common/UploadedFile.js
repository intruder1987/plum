import React, { Component, PropTypes } from 'react';
import BaseComponent from './Base';

class UploadedFile extends BaseComponent {

    render() {
        const { className, file, onRemove } = this.props;
        let icon = '';
        switch (file.type) {
            case 'application/pdf':
            default:
                icon = <div className="icon-doc-green"></div>;
                break;
        }
        return (
            <div className={className ? className : 'uploaded-file-container'}>
                <div className="icon-file-container">
                    {icon}
                </div>
                <div className="title">
                    {file.name ? file.name : 'N/A'}
                </div>
                <div className="close-icon-container">
                    <div className="icon-cross" onClick={onRemove}></div>
                </div>
            </div>
        );
    }
}

UploadedFile.propTypes = {
    className: PropTypes.string,
    file: PropTypes.object,
    onClick: PropTypes.func,
    onRemove: PropTypes.func
};

export default UploadedFile;