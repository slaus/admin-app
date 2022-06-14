import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './badge.scss';

const Badge = ({color, text}) => {

    const badgeClasses = classNames(
        'badge',
        `badge__${color}`
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
    color: PropTypes.string,
    text: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
};

Badge.defaultProps = {
    color: 'danger',
    text: ''
};

export default Badge;
