import React from 'react';

import './top-nav.scss';
import UserInfo from "../user-info";
import Search from "../search";
import Dropdown from "../dropdown";

const TopNav = ({data}) => {

    const openSidebar = () => {
        document.body.classList.add('sidebar-open');
    };

    return (
        <div className="topnav">
            <Search />
            <UserInfo name={data.user.name} img={data.user.img} />
            <Dropdown
                icon="bell"
            />
            <div
                className="topnav__toggle"
                onClick={openSidebar}
            >
                <i className="bx bx-menu-alt-right"></i>
            </div>
        </div>
    );
};

export default TopNav;
