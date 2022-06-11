import React from 'react';

import './help-page.scss';
import PageHeader from "../../components/page-header";

const HelpPage = () => {

    return (
        <div>
            <PageHeader
                text="Help Page"
                className="page-header"
                Tag="h2"
            />
        </div>
    );
};

export default HelpPage;
