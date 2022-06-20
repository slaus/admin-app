import React from 'react';

import './statistics-page.scss';
import H from "../../components/ui/tag-h";
import PageHeader from "../../components/ui/page-header";
import Wrapper from "../../components/ui/wrapper";

const StatisticsPage = () => {

    return (
        <div className="statistics">
            <PageHeader>
                <H text="Statistics Page"/>
            </PageHeader>
            <Wrapper>
                <div className="row">

                </div>
            </Wrapper>
        </div>
    );
};

export default StatisticsPage;
