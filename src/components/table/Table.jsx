import React, {useState} from 'react';

import './table.scss';
import Pagination from "../pagination";

const Table = (props) => {

    const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit)) : props.bodyData;

    const [dataShow, setDataShow] = useState(initDataShow);

    let pages = 1;

    let range = [];

    if (props.limit !== undefined) {
        let page = Math.floor(props.bodyData.length / Number(props.limit));
        pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1;
        range = [...Array(pages).keys()];
    }

    const [currPage, setCurrPage] = useState(0);

    const selectPage = page => {
        const start = Number(props.limit) * page;
        const end = start + Number(props.limit);

        setDataShow(props.bodyData.slice(start, end));

        setCurrPage(page)
    };

    return (
        <>
            <div className="card">
                <div className="card__body">
                    <div className="table-wrapper">
                        <table>
                            {
                                props.headData && props.renderHead ?
                                    (<TableHead
                                        headData={props.headData}
                                        renderHead={props.renderHead}
                                    />) : null
                            }
                            {
                                props.bodyData && props.renderBody ?
                                    (<TableBody
                                        dataShow={dataShow}
                                        renderBody={props.renderBody}
                                    />) : null
                            }
                        </table>
                    </div>
                </div>
            </div>
            {
                pages > 1 ?
                    (<Pagination
                        range={range}
                        currPage={currPage}
                        selectPage={selectPage}
                    />) : null
            }
        </>
    )
};

export default Table;


const TableHead = (props) => {
    return (
        <thead>
        <tr>
            {
                props.headData.map((item, index) => props.renderHead(item, index))
            }
        </tr>
        </thead>
    );
};

const TableBody = ({dataShow, renderBody}) => {
    return (
        <tbody>
        {
            dataShow.map((item, index) => renderBody(item, index))
        }
        </tbody>
    );
};