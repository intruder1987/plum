import React, { Component, PropTypes } from 'react';

class Select extends Component {
    componentDidMount() {
        this.focus = () => this.select.focus();
    }

    focus = () => undefined;

    handleChange = (event) => {
        this.props.onChange(event.target.value);
    }

    render() {
        const {
            className,
            disabled,
            children,
            ...props
        } = this.props;

        return (
            <select
                {...props}
                ref={(node) => { this.select = node; }}
                onChange={this.handleChange}
                className={className || 'default-select'}
                disabled={disabled}
            >
                {children}
            </select>
        );
    }
}

Select.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string,
    className: PropTypes.string
};

export default Select;