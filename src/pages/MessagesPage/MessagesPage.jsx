import React from 'react';

import './messages-page.scss';
import PageHeader from "../../components/page-header";

const MessagesPage = () => {

    return (
        <div>
            <PageHeader
                text="Messages Page"
                className="page-header"
                Tag="h2"
            />
        </div>
    );
};

export default MessagesPage;
