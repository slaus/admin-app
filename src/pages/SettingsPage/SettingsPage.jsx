import React from 'react';

import './settings-page.scss';
import PageHeader from "../../components/page-header";

const SettingsPage = () => {

    return (
        <div>
            <PageHeader
                text="Settings Page"
                className="page-header"
                Tag="h2"
            />
        </div>
    );
};

export default SettingsPage;
