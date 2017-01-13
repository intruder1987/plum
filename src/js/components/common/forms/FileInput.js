import React, { Component, PropTypes } from 'react';

class FileInput extends Component {
    componentDidMount() {
        this.focus = () => this.input.focus();
    }

    focus = () => undefined;
    id = `file${Math.random()}`;

    handleChange = ({ target: { files } }) => {
        this.props.onChange(files);
    }

    render() {
        const { className } = this.props;
        return (
            <input
                type="file"
                id={this.id}
                ref={(node) => { this.input = node; }}
                onChange={this.handleChange}
                className={className ? className : 'default-file-input'}
            />
        );
    }
}

FileInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    className: PropTypes.string
};

export default FileInput;