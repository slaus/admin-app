import React from 'react';

import './logout-page.scss';
import H from "../../components/ui/tag-h";
import PageHeader from "../../components/ui/page-header";
import Wrapper from "../../components/ui/wrapper";

const LogoutPage = () => {

    return (
        <div className="logout">
            <PageHeader>
                <H text="Logout Page"/>
            </PageHeader>
            <Wrapper>
                <div className="row">

                </div>
            </Wrapper>
        </div>
    );
};

export default LogoutPage;
