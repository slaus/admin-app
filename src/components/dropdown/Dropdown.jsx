import React, {useRef} from 'react';
import {Link} from "react-router-dom";

import './dropdown.scss';
import Badge from "../badge";


const Dropdown = ({name, icon, messagesList}) => {

    const dropdownButtonRef = useRef(null);
    const dropdownContentRef = useRef(null);

    const clickOutsideRef = (contentRef, buttonRef) => {
        document.addEventListener('mousedown', (e) => {
            // user click dropdown button
            if (buttonRef.current && buttonRef.current.contains(e.target)) {
                contentRef.current.classList.toggle('active');
            } else {
                // user click outside dropdown button and dropdown content
                if (contentRef.current && !contentRef.current.contains(e.target)) {
                    contentRef.current.classList.remove('active')
                }
            }
        })
    };

    clickOutsideRef(dropdownContentRef, dropdownButtonRef);

    const onClick = () => dropdownContentRef.current.classList.remove('active');

    const quantityNewMessages = messagesList.filter(item => item.new).length;

    return (
        <div className='dropdown'>
            <button
                className="dropdown__toggle"
                ref={dropdownButtonRef}
            >
                {name &&
                <span>{name}</span>
                }
                {icon &&
                <i className={`bx bx-${icon}`}></i>
                }
                <Badge text={quantityNewMessages} />
            </button>
            <div
                className="dropdown__content"
                ref={dropdownContentRef}
            >
                <div className="dropdown__content__item">
                    {
                        quantityNewMessages !== 0 &&
                        <ul>
                            {
                                messagesList.map((item, index) => {
                                    return item.new ?
                                        <li
                                            key={`message-${index}`}
                                            className={`${item.type === "mail" ? "mail" : item.type === "message" ? "message" : item.type === "error" ? "error" : "reminder"}`}
                                        >
                                            <i className={`bx bx-${item.type === "mail" ? "envelope" : item.type === "message" ? "comment-dots" : item.type === "error" ? "error" : "bell"}`}></i>
                                            {item.message}
                                        </li>
                                        : null
                                })
                            }
                        </ul>
                    }
                </div>
                <div className="dropdown__content__footer">
                    <Link
                        to="/messages"
                        onClick={onClick}
                    >Show all</Link>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
