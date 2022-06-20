import React from 'react';

import './messages-page.scss';
import H from "../../components/ui/tag-h";
import Icon from "../../components/ui/icon";
import Wrapper from "../../components/ui/wrapper";
import PageHeader from "../../components/ui/page-header";
import Search from "../../components/search";

const MessagesPage = ({messagesList}) => {

    return (
        <div className="messages">
            <PageHeader>
                <H text="Messages Page"/>
                <Search />
            </PageHeader>
            <Wrapper>
                <div className="row">
                    <div className="messages__block col-12">
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
            </Wrapper>
        </div>
    );
};

export default MessagesPage;
