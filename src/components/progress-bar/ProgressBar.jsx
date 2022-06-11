import React, {useRef, useEffect} from 'react';

import './progress-bar.scss';

const ProgressBar = (props) => {

    const barInnerRef = useRef();

    useEffect(() => {
        barInnerRef.current.style.width = `${props.value}%`
    }, []);

    return (
        <div className='progress-bar'>
            <div ref={barInnerRef} className={`progress-bar__inner ${props.value > 66 ? 'high' : props.value > 40 ? 'normal' : 'begin'}`}></div>
        </div>
    );
};

export default ProgressBar;
