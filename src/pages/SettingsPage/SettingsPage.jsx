import React from 'react';

import './settings-page.scss';
import H from "../../components/ui/tag-h";
import PageHeader from "../../components/ui/page-header";
import Wrapper from "../../components/ui/wrapper";

const SettingsPage = () => {

    return (
        <div className="settings">
            <PageHeader>
                <H text="Settings Page"/>
            </PageHeader>
            <Wrapper>
                <div className="row">

                </div>
            </Wrapper>
        </div>
    );
};

export default SettingsPage;
