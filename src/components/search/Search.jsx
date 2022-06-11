import React from 'react';

import './search.scss';

const Search = () => {

    const search = 'Search here...';

    const onFocus = e => e.target.placeholder = '';

    const onBlur = (e) => {
        e.target.value = '';
        e.target.placeholder = 'Search here...';
    };

    return (
        <div className="search">
            <input
                type="text"
                placeholder={search}
                onChange={(e) => e.target.value}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <i className='bx bx-search'></i>
        </div>
    );
};

export default Search;
