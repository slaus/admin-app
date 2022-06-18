import React from 'react';

import './messages-page.scss';
import PageHeader from "../../components/page-header";
import Icon from "../../components/ui/icon";

const MessagesPage = ({messagesList}) => {

    return (
        <div className="messages">
            <PageHeader
                text="Messages Page"
            />
            <div className="messages__block">
                <ul>
                    {
                        messagesList.map((item, index) => (
                            <li
                                key={`message-${index}`}
                                className={`${item.type === "mail" ? "mail" : item.type === "message" ? "message" : item.type === "error" ? "error" : "reminder"} ${item.new ? "unreaded" : ""}`}
                            >
                                <Icon
                                    small
                                    name={item.type === "mail" ? "envelope" : item.type === "message" ? "comment-dots" : item.type === "error" ? "error" : "bell"}
                                />
                                {item.message}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default MessagesPage;
