import React, { PropTypes, Component } from 'react';
// import checkboxOff from './images/checkbox-off.png';
// import checkboxOn from './images/checkbox-on.png';

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

        // const checkIconUrl = value ? checkboxOn : checkboxOff;
        return (
            <div className="checkbox-container" onClick={this.handleClick} >
                <div className={className ? className : 'default-checkbox'} ></div>
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