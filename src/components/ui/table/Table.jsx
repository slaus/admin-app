import React, {useState} from 'react';

import './table.scss';
import Pagination from "../pagination";

const Table = ({membersListLimit, bodyData, renderBody, headData, renderHead}) => {

    const initDataShow = membersListLimit && bodyData ? bodyData.slice(0, Number(membersListLimit)) : bodyData;

    const [dataShow, setDataShow] = useState(initDataShow);

    let pages = 1;

    let range = [];

    if (membersListLimit !== undefined) {
        let page = Math.floor(bodyData.length / Number(membersListLimit));
        pages = bodyData.length % Number(membersListLimit) === 0 ? page : page + 1;
        range = [...Array(pages).keys()];
    }

    const [currPage, setCurrPage] = useState(0);

    const selectPage = page => {
        const start = Number(membersListLimit) * page;
        const end = start + Number(membersListLimit);

        setDataShow(bodyData.slice(start, end));

        setCurrPage(page)
    };

    return (
        <>
            <div className="card">
                <div className="card__body">
                    <div className="table-wrapper">
                        <table>
                            {
                                headData && renderHead ?
                                    (<TableHead
                                        headData={headData}
                                        renderHead={renderHead}
                                    />) : null
                            }
                            {
                                bodyData && renderBody ?
                                    (<TableBody
                                        dataShow={dataShow}
                                        renderBody={renderBody}
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


const TableHead = ({headData, renderHead}) => {
    return (
        <thead>
        <tr>
            {
                headData.map((item, index) => renderHead(item, index))
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