import React from 'react';

import './blacklist-page.scss';
import H from "../../components/ui/tag-h";
import PageHeader from "../../components/ui/page-header";
import Wrapper from "../../components/ui/wrapper";

const BlacklistPage = () => {

    return (
        <div className="blacklist">
            <PageHeader>
                <H text="Blacklist Page"/>
            </PageHeader>
            <Wrapper>
                <div className="row">

                </div>
            </Wrapper>
        </div>
    );
};

export default BlacklistPage;
