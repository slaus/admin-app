import React from 'react';

import './help-page.scss';
import PageHeader from "../../components/page-header";
import Icon from "../../components/icon";

const HelpPage = () => {

    return (
        <div>
            <PageHeader
                text="Help Page"
                className="page-header"
                Tag="h2"
            />
            <Icon />
        </div>
    );
};

export default HelpPage;
