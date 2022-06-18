import React from 'react';

import './help-page.scss';
import PageHeader from "../../components/page-header";
import Wrapper from "../../components/ui/wrapper";
import Box from "../../components/ui/box";
import Icon from "../../components/ui/icon";
import Button from "../../components/ui/button";

const HelpPage = ({guideList}) => {

    const onClick = (e) => {
        console.log(e.target)
    };

    return (
        <div>
            <PageHeader
                text="Help Page"
            />
            <Wrapper>
                <div className="row">
                    {
                        guideList.map((block, index) => (
                            <div className="col-12 col-md-6 mb" key={`quide-${index}`}>
                                <Box>
                                    <PageHeader Tag="h3" text={block.title}/>
                                    <ul className="help">
                                        {
                                            block.help.map((item, index) => (
                                                <li
                                                    key={`item-${index}`}
                                                    className="help__item"
                                                    onClick={onClick}
                                                >
                                                    <div className="help__item__question">
                                                        <Icon name="help-circle" small primary/>
                                                        {item.question}
                                                    </div>
                                                    <div className="help__item__answer">
                                                        {item.answer}
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className="help__button">
                                        {
                                            block.help.length > 5 &&
                                            <Button round text="see all questions"/>
                                        }
                                    </div>
                                </Box>
                            </div>
                        ))
                    }
                </div>
            </Wrapper>
        </div>
    );
};

export default HelpPage;
