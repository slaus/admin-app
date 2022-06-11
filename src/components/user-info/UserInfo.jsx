import React from 'react';

import './user-info.scss';

const UserInfo = (props) => {

    return (
        <div className="user-info">
            <div className="user-info__img">
                <img src={props.img} alt=""/>
            </div>
            <div className="user-info__name">
                <span>{props.name}</span>
            </div>
        </div>
    );
};

export default UserInfo;
