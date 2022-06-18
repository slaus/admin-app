import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './page-header.scss';
import Icon from "../ui/icon";

const PageHeader = ({
                        Tag,
                        className,
                        text,
                        icon,
                        primary,
                        secondary,
                        success,
                        danger,
                        warning,
                        info,
                        light
                    }) => {

    const pageHeaderClasses = classNames(
        Tag,
        primary ? `${Tag}-primary` : null,
        secondary ? `${Tag}-secondary` : null,
        success ? `${Tag}-success` : null,
        danger ? `${Tag}-danger` : null,
        warning ? `${Tag}-warning` : null,
        info ? `${Tag}-info` : null,
        light ? `${Tag}-light` : null,
        className
    );

    return (
        <Tag className={pageHeaderClasses}>
            {icon && <Icon name={icon} />}
            {text}
        </Tag>
    );
};

PageHeader.propTypes = {
    text: PropTypes.string,
    Tag: PropTypes.string,
    icon: PropTypes.string,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    success: PropTypes.bool,
    danger: PropTypes.bool,
    warning: PropTypes.bool,
    info: PropTypes.bool,
    light: PropTypes.bool,
};

PageHeader.defaultProps = {
    text: "",
    Tag: "h2",
    icon: "",
    primary: false,
    secondary: false,
    success: false,
    danger: false,
    warning: false,
    info: false,
    light: false,
};

export default PageHeader;
