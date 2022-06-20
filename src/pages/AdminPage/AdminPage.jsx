import React from 'react';

import './admin-page.scss';
import H from "../../components/ui/tag-h";
import PageHeader from "../../components/ui/page-header";
import Wrapper from "../../components/ui/wrapper";

const AdminPage = () => {

    return (
        <div className="administration">
            <PageHeader>
                <H text="Administration Page"/>
            </PageHeader>
            <Wrapper>
                <div className="row">

                </div>
            </Wrapper>
        </div>
    );
};

export default AdminPage;
