import React from 'react';

import './payments-page.scss';
import PageHeader from "../../components/page-header";

const PaymentsPage = () => {

    return (
        <div>
            <PageHeader
                text="Payments Page"
                className="page-header"
                Tag="h2"
            />
        </div>
    );
};

export default PaymentsPage;
