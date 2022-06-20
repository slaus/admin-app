import React from 'react';

import './payments-page.scss';
import H from "../../components/ui/tag-h";
import PageHeader from "../../components/ui/page-header";
import Wrapper from "../../components/ui/wrapper";

const PaymentsPage = () => {

    return (
        <div className="payment">
            <PageHeader>
                <H text="Payment Page"/>
            </PageHeader>
            <Wrapper>
                <div className="row">

                </div>
            </Wrapper>
        </div>
    );
};

export default PaymentsPage;
