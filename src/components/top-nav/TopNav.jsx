import React from 'react';

import './top-nav.scss';
import UserInfo from "../user-info";
import Search from "../search";
import Dropdown from "../ui/dropdown";

const TopNav = ({data, messagesList}) => {

    const openSidebar = () => {
        document.body.classList.add('sidebar-open');
    };

    return (
        <div className="topnav">
            <Search />
            <UserInfo name={data.user.name} img={data.user.img} />
            <Dropdown
                icon="bell"
                messagesList={messagesList}
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
