import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './badge.scss';

const Badge = ({
                   text,
                   primary,
                   secondary,
                   success,
                   danger,
                   warning,
                   info,
                   light,
                   square,
                   className
               }) => {

    const badgeClasses = classNames(
        'badge',
        primary ? 'badge-primary' : null,
        secondary ? 'badge-secondary' : null,
        success ? 'badge-success' : null,
        danger ? 'badge-danger' : null,
        warning ? 'badge-warning' : null,
        info ? 'badge-info' : null,
        light ? 'badge-light' : null,
        square ? 'badge-square' : null,
        className
    );

    return (
        <>
            {
                text !== 0 &&
                <span className={badgeClasses}>
                    {text}
                </span>
            }
        </>
    );
};

Badge.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    className: PropTypes.string,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    success: PropTypes.bool,
    danger: PropTypes.bool,
    warning: PropTypes.bool,
    info: PropTypes.bool,
    light: PropTypes.bool,
    square: PropTypes.bool,
};

Badge.defaultProps = {
    text: null,
    classNames: '',
    primary: false,
    secondary: false,
    success: false,
    danger: true,
    warning: false,
    info: false,
    light: false,
    square: false,
};

export default Badge;
