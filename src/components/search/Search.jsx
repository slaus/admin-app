import React from 'react';

import './search.scss';
import Input from "../ui/input";

const Search = () => {

    const search = 'Search here...';

    const onFocus = (e) => {
        setTimeout(() => {
            e.target.placeholder = '';
        }, 200);
    };

    const onBlur = (e) => {
        setTimeout(() => {
            e.target.value = '';
            e.target.placeholder = 'Search here...';
        }, 200);
    };

    const onClick = () => console.log("!!!!!");

    return (
        <div className="search">
            <Input
                placeholder={search}
                onChange={(e) => console.log(e.target.value)}
                onFocus={onFocus}
                onBlur={onBlur}
                icon="search"
            />
        </div>
    );
};

export default Search;
