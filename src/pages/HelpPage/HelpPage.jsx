import React from 'react';

import './help-page.scss';
import PageHeader from "../../components/page-header";
import Wrapper from "../../components/wrapper";
import Box from "../../components/box";
import Icon from "../../components/icon";

const HelpPage = ({guideList}) => {

    return (
        <div>
            <PageHeader
                text="Help Page"
            />
            <Wrapper>
                <div className="row">
                    {
                        guideList.map((block, index) => (
                            <div className="col-12 col-sm-6 mb" key={`quide-${index}`}>
                                <Box>
                                    <PageHeader Tag="h3" text={block.title}/>
                                    <ul>
                                        {
                                            block.help.map((item, index) => (
                                                <li key={`item-${index}`}>
                                                    <Icon name="help-circle" small primary />
                                                    {item.question}
                                                </li>
                                            ))
                                        }
                                    </ul>
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
