import React, {useRef} from 'react';
import {Link} from "react-router-dom";

import './dropdown.scss';


const Dropdown = (props) => {

    const dropdownButtonElement = useRef(null);
    const dropdownContentElement = useRef(null);

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

    clickOutsideRef(dropdownContentElement, dropdownButtonElement);

    const onClick = () => dropdownContentElement.current.classList.remove('active');

    return (
        <div className='dropdown'>
            <button
                className="dropdown__toggle"
                ref={dropdownButtonElement}
            >
                {props.name &&
                    <span>{props.name}</span>
                }
                {props.icon &&
                    <i className={`bx bx-${props.icon}`}></i>
                }
            </button>
            <div
                className="dropdown__content"
                ref={dropdownContentElement}
            >
                <div className="dropdown__content__item">
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
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
