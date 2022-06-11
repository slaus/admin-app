import React, {useRef} from 'react';

import './dropdown.scss';


const Dropdown = (props) => {

    const clickOutsideRef = (content_ref, toggle_ref) => {
        document.addEventListener('mousedown', (e) => {
            // user click toggle
            if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
                content_ref.current.classList.toggle('active')
            } else {
                // user click outside toggle and content
                if (content_ref.current && !content_ref.current.contains(e.target)) {
                    content_ref.current.classList.remove('active')
                }
            }
        })
    };

    const dropdown_toggle_el = useRef(null);
    const dropdown_content_el = useRef(null);

    clickOutsideRef(dropdown_content_el, dropdown_toggle_el);

    return (
        <div className='dropdown'>
            <button
                className="dropdown__toggle"
                ref={dropdown_toggle_el}
            >
                {props.name}
            </button>
            <div
                className="dropdown__content"
                ref={dropdown_content_el}
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
                    <a href="">Show all</a>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
