import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app';

import './scss/index.scss';

import sidebarMenu from './server/sidebarMenu.json';
import membersList from './server/membersList.json';
import messagesList from './server/messagesList.json';
import guideList from './server/guideList.json';
import {data, colors} from'./constants';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App
            sidebarMenu={sidebarMenu}
            membersList={membersList}
            membersListLimit="10"
            data={data}
            colors={colors}
            messagesList={messagesList}
            guideList={guideList}
            guideListLimit="5"
        />
    </BrowserRouter>
);

