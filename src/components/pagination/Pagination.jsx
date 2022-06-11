import React from 'react';

import './pagination.scss';

const Pagination = ({range, currPage, selectPage}) => {

    return (
        <div className="pagination">
            {
                range.map((item, index) => (
                    <div
                        key={index}
                        className={`pagination__item ${currPage === index ? 'active' : ''}`}
                        onClick={() => selectPage(index)}
                    >
                        {item + 1}
                    </div>
                ))
            }
        </div>
    );
};

export default Pagination;
