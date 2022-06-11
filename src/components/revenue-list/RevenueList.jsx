import React from 'react';

import './revenue-list.scss';
import ProgressBar from "../progress-bar";
import Box from "../box";

const RevenueList = ({data}) => {

    return (
        <Box>
            <div className="title mb">Revenue by channel</div>
            <ul className='revenue-list'>
                {
                    data.map((item, index) => (
                        <li className="revenue-list__item" key={`revenue-${index}`}>
                            <div className="revenue-list__item__title">
                                {item.title}
                                <span className={
                                    `${item.value > 66 ? 'high' : item.value > 40 ? 'normal' : 'begin'}`
                                }>
                                {item.value}%
                            </span>
                            </div>
                            <div>
                                <ProgressBar value={item.value} />
                            </div>
                        </li>
                    ))
                }
            </ul>
        </Box>
    );
};

export default RevenueList;
