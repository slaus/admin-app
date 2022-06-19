import React, {useState} from 'react';

import './quide-page.scss';
import PageHeader from "../../components/ui/page-header";
import Wrapper from "../../components/ui/wrapper";
import Box from "../../components/ui/box";
import Icon from "../../components/ui/icon";
import Button from "../../components/ui/button";

const GuidePage = ({guideList, guideListLimit}) => {

    const onClick = (e) => {
        console.log(e.target)
    };

    const [column, setColumn] = useState(false);

    return (
        <div className="guide">
            <div className="guide__title">
                <PageHeader
                    text="Guide Page"
                />
                <Button success round icon="border-all" onClick={() => setColumn(false)} />
                <Button success round icon="square" onClick={() => setColumn(true)} />
                <Button round warning text="add question" />
            </div>
            <Wrapper>
                <div className={`row ${column ? "guide__column" : ""}`}>
                    {
                        guideList.map((block, index) => (
                            <div className={`guide__block col-12 col-md-${column ? 12 : 6} mb`} key={`quide-${index}`}>
                                <Box>
                                    <PageHeader Tag="h3" text={block.title}/>
                                    <ul className="guide__list">
                                        {
                                            block.help.slice(0, Number(guideListLimit)).map((item, index) => (
                                                <li
                                                    key={`item-${index}`}
                                                    className="guide__item"
                                                    onClick={onClick}
                                                >
                                                    <div className="guide__item__question">
                                                        <Icon name="help-circle" small primary/>
                                                        {item.question}
                                                    </div>
                                                    <div className="guide__item__answer">
                                                        {item.answer}
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className="guide__button">
                                        {
                                            block.help.length > Number(guideListLimit) &&
                                            <Button round text="see all questions" number={block.help.length}/>
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

export default GuidePage;
