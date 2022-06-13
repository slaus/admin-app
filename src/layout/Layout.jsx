import React from 'react';
import {Outlet} from 'react-router-dom';

import './layout.scss';
import Sidebar from "../components/sidebar";
import TopNav from "../components/top-nav";

const Layout = ({sidebarMenu, data, messagesList}) => {

    return (
        <>
            <Sidebar sidebarMenu={sidebarMenu}/>
            <div className="main">
                <div className="main__content">
                    <TopNav data={data} messagesList={messagesList} />
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Layout;
