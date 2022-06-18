import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './icon.scss';

const Icon = ({
                  name,
                  primary,
                  secondary,
                  success,
                  danger,
                  warning,
                  info,
                  light,
                  small,
                  medium,
                  large,
                  className,
                  solid,
              }) => {

    const iconClasses = classNames(
        'icon bx',
        `bx${solid ? 's' : ''}-${name}`,
        primary ? 'bx-primary' : null,
        secondary ? 'bx-secondary' : null,
        success ? 'bx-success' : null,
        danger ? 'bx-danger' : null,
        warning ? 'bx-warning' : null,
        info ? 'bx-info' : null,
        light ? 'bx-light' : null,
        small ? 'bx-small' : null,
        medium ? 'bx-medium' : null,
        large ? 'bx-large' : null,
        className
    );

    return (
        <>
            {
                name &&
                <i className={iconClasses}></i>
            }
        </>
    );
};

Icon.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    solid: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    success: PropTypes.bool,
    danger: PropTypes.bool,
    warning: PropTypes.bool,
    info: PropTypes.bool,
    light: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
};

Icon.defaultProps = {
    name: 'home',
    className: '',
    solid: false,
    primary: false,
    secondary: false,
    success: false,
    danger: false,
    warning: false,
    info: false,
    light: false,
    small: false,
    medium: false,
    large: false,
};

export default Icon;
