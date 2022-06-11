import React from 'react';
import {buildStyles, CircularProgressbarWithChildren} from 'react-circular-progressbar';

import './summary-box.scss';
import Box from "../box";

const SummaryBox = ({title, subtitle, value, percent, colors}) => {

    return (
        <Box>
            <div className='summary-box'>
                <div className="summary-box__info">
                    <div className="summary-box__info__title">
                        <div>{title}</div>
                        <span>{subtitle}</span>
                    </div>
                    <div className="summary-box__info__value">
                        {value}
                    </div>
                </div>
                <div className="summary-box__chart">
                    <CircularProgressbarWithChildren
                        value={percent}
                        strokeWidth={10}
                        styles={buildStyles({
                            pathColor: percent > 66 ? colors.red : percent > 40 ? colors.purple : colors.green,
                            trailColor: 'transparent',
                            strokeLinecap: 'round'
                        })}
                    >
                        <div className="summary-box__chart__value">
                            {percent}%
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            </div>
        </Box>
    );
};

export default SummaryBox;
