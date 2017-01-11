import React, { Component, PropTypes } from 'react';

class TextInput extends Component {
    componentDidMount() {
        this.focus = () => this.input.focus();
    }

    focus = () => undefined;

    handleChange = (event) => {
        this.props.onChange(event.target.value);
    }

    render() {
        const {
            className,
            readonly,
            ...props
        } = this.props;
        const opts = {};
        if (readonly) {
            opts.readOnly = 'readOnly';
        }
        return (
            <input
                {...props}
                {...opts}
                ref={(node) => { this.input = node; }}
                onChange={this.handleChange}
                className={className || 'default-input'}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
            />
        );
    }
}

TextInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    className: PropTypes.string,
    readonly: PropTypes.bool
};

export default TextInput;