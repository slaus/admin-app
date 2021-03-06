import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './app.scss';
import Layout from "../../layout";
import DashboardPage from "../../pages/DashboardPage";
import MembersPage from "../../pages/MembersPage";
import LocalizationPage from "../../pages/LocalizationPage";
import GuidePage from "../../pages/GuidePage";
import PaymentsPage from "../../pages/PaymentsPage";
import SettingsPage from "../../pages/SettingsPage";
import AdminPage from "../../pages/AdminPage";
import StatisticsPage from "../../pages/StatisticsPage";
import BlacklistPage from "../../pages/BlacklistPage";
import LogoutPage from "../../pages/LogoutPage";
import MessagesPage from "../../pages/MessagesPage";

function App({
                 sidebarMenu,
                 data,
                 colors,
                 membersList,
                 messagesList,
                 membersListLimit,
                 guideList,
                 guideListLimit
             }) {

    return (
        <Routes>
            <Route path="/" element={<Layout sidebarMenu={sidebarMenu} data={data} messagesList={messagesList}/>}>
                <Route index element={<DashboardPage data={data} colors={colors}/>}/>
                <Route path="/guide" element={<GuidePage guideList={guideList} guideListLimit={guideListLimit}/>}/>
                <Route path="/members" element={<MembersPage membersListLimit={membersListLimit} membersList={membersList}/>}/>
                <Route path="/payments" element={<PaymentsPage/>}/>
                <Route path="/localization" element={<LocalizationPage/>}/>
                <Route path="/settings" element={<SettingsPage/>}/>
                <Route path="/administration" element={<AdminPage/>}/>
                <Route path="/statistics" element={<StatisticsPage/>}/>
                <Route path="/blacklist" element={<BlacklistPage/>}/>
                <Route path="/messages" element={<MessagesPage messagesList={messagesList}/>}/>
                <Route path="/logout" element={<LogoutPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
