import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './page-header.scss';

const PageHeader = ({children, className}) => {

    const pageHeaderClasses = classNames(
        'page-header',
        className
    );

    return (
        <div className={pageHeaderClasses}>
            {children}
        </div>
    );
};

PageHeader.propTypes = {
    className: PropTypes.string,
};

PageHeader.defaultProps = {
    className: "",
};

export default PageHeader;
