import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';

import {images} from '../../constants';

import './sidebar.scss';
import Icon from "../icon";

const Sidebar = ({sidebarMenu}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const currentPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarMenu.findIndex(item => item.name === currentPath);

        setActiveIndex(currentPath.length === 0 ? 0 : activeItem);
    }, [location]);

    const closeSidebar = () => {
        document.body.classList.remove('sidebar-open');
    };

    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src={images.logo} alt=""/>
                <div
                    className="sidebar__close"
                    onClick={closeSidebar}
                >
                    <i className='bx bx-x'></i>
                </div>
            </div>
            <div className="sidebar__menu">
                {
                    sidebarMenu.map((nav, index) => (
                        <Link
                            key={`nav-${index}`}
                            to={nav.link}
                            className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}
                            onClick={closeSidebar}
                        >
                            <div className="sidebar__menu__item__icon">
                                <Icon name={nav.icon} medium />
                            </div>
                            <div className="sidebar__menu__item__txt">
                                {nav.title}
                            </div>
                        </Link>
                    ))
                }
                <Link
                    to="/logout"
                    className="sidebar__menu__item"
                >
                    <div className="sidebar__menu__item__icon">
                        <Icon name="log-out" medium />
                    </div>
                    <div className="sidebar__menu__item__txt">
                        Logout
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;

