import React from 'react';

import './page-header.scss';

const PageHeader = (props) => {

    const {Tag, className, text} = props;

    return (
        <Tag
            className={`${Tag} ${className}`}
        >
            {text}
        </Tag>
    );
};

export default PageHeader;
