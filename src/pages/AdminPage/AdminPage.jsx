import React from 'react';

import './admin-page.scss';
import PageHeader from "../../components/page-header";

const AdminPage = () => {

    return (
        <div>
            <PageHeader
                text="Administration Page"
                className="page-header"
                Tag="h2"
            />
        </div>
    );
};

export default AdminPage;
