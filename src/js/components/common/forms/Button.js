import React, { PropTypes } from 'react';

const Button = ({
    className,
    children,
    disabled,
    onClick,
    ...props
}) => {
    const handleClick = (e) => {
        if (disabled) {
            return;
        }
        onClick(e);
    };

    return (
        <div
            {...props}
            onClick={handleClick}
            className={className}
        >
            {children}
        </div>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};

Button.defaultProps = {
    onClick: () => undefined
};

export default Button;
