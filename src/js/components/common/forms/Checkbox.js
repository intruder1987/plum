import React, { PropTypes, Component } from 'react';

class CheckBox extends Component {
    handleClick = () => {
        const {onChange, value, disabled} = this.props;
        if (disabled) {
            return;
        }
        onChange(!value);
    }

    render() {
        const {
            value,
            className,
            classLabel,
            disabled,
            children
        } = this.props;

        let cls = className || 'default-checkbox';
        if (value) {
            cls += ' checked';
        }

        return (
            <div className="checkbox-container" onClick={this.handleClick} >
                <div className={cls} ></div>
                {!children ? null : (
                        <div className={classLabel ? classLabel : 'default-checkbox-label'}>{children}</div>
                    )}
            </div>
        );
    }
}
CheckBox.propTypes = {
    className: PropTypes.string,
    classLabel: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.node
};

export default CheckBox;