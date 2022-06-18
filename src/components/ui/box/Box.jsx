import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './box.scss';

const Box = ({color, children, height}) => {

    const boxClasses = classNames(
        'box',
        `box__${color}`,
        height && `box__${height}-height`
    );

    return (
        <div className={boxClasses}>
            {children}
        </div>
    );
};

Box.propTypes = {
    color: PropTypes.string,
    height: PropTypes.string
};

Box.defaultProps = {
    color: 'white',
    height: null
};

export default Box;
