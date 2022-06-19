import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link} from "react-router-dom";

import './button.scss';
import Icon from "../icon";

const Button = ({
                    text,
                    href,
                    disabled,
                    active,
                    large,
                    medium,
                    small,
                    primary,
                    secondary,
                    success,
                    danger,
                    warning,
                    info,
                    light,
                    round,
                    icon,
                    iconSolid,
                    number,
                    onClick,
                    className
                }) => {

    const onClickAction = (e) => {
        if (disabled) {
            e.preventDefault();
        } else {
            return onClick(e);
        }
    };

    const buttonClasses = classNames(
        'button',
        active ? 'button-active' : null,
        large ? 'button-large' : null,
        small ? 'button-small' : null,
        round ? 'button-round' : null,
        primary ? 'button-primary' : null,
        secondary ? 'button-secondary' : null,
        success ? 'button-success' : null,
        danger ? 'button-danger' : null,
        warning ? 'button-warning' : null,
        info ? 'button-info' : null,
        light ? 'button-light' : null,
        className,
    );

    return (
        <>
            {href && href !== "" ?
                <Link
                    to={href}
                    className={buttonClasses}
                    disabled={disabled}
                    onClick={onClickAction}
                >
                    {icon && icon.length && <Icon name={icon} solid={iconSolid} />}
                    <span>{text}</span>
                    {number && <span className="button-number">{`(${number})`}</span>}
                </Link>
                :
                <button
                    className={buttonClasses}
                    disabled={disabled}
                    onClick={onClickAction}
                >
                    {icon && icon.length && <Icon name={icon} solid={iconSolid} />}
                    <span>{text}</span>
                    {number && <span className="button-number">{`(${number})`}</span>}
                </button>
            }
        </>
    );
};

Button.propTypes = {
    text: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    round: PropTypes.bool,
    href: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    success: PropTypes.bool,
    danger: PropTypes.bool,
    warning: PropTypes.bool,
    info: PropTypes.bool,
    light: PropTypes.bool,
    number: PropTypes.bool,
};

Button.defaultProps = {
    text: '',
    onClick: () => {
    },
    className: '',
    disabled: false,
    active: false,
    round: false,
    href: false,
    small: false,
    large: false,
    primary: true,
    secondary: false,
    success: false,
    danger: false,
    warning: false,
    info: false,
    light: false,
    icon: false,
    iconSolid: false,
    number: false,
};

export default Button;