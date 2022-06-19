import React from 'react';

import './members-page.scss';
import Table from "../../components/ui/table";
import PageHeader from "../../components/ui/page-header";

const customerTableHead = [
    '#',
    'name',
    'email',
    'phone',
    'total orders',
    'location'
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
    <tr
        key={index}
        onClick={(e) => e.target.parentNode.classList.toggle('active')}
    >
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_orders}</td>
        <td>{item.location}</td>
    </tr>
);

const MembersPage = ({membersList, membersListLimit}) => {
    return (
        <div className="member-page">
            <PageHeader
                text="Members Page"
            />
            <div className="row">
                <div className="col-12">
                    <Table
                        membersListLimit={membersListLimit}
                        headData={customerTableHead}
                        renderHead={(item, index) => renderHead(item, index)}
                        bodyData={membersList}
                        renderBody={(item, index) => renderBody(item, index)}
                    />
                </div>
            </div>
        </div>
    )
};

export default MembersPage;
