import React, {useState} from 'react';

import './dashboard-page.scss';
import Wrapper from "../../components/ui/wrapper";
import SummaryBox from "../../components/summary-box";
import LineChart from "../../components/line-chart";
import VerticalBarChart from "../../components/vertical-bar-chart";
import OverallList from "../../components/overall-list";
import RevenueList from "../../components/revenue-list";
import PageHeader from "../../components/ui/page-header";
import H from "../../components/ui/tag-h";

const DashboardPage = ({data, colors}) => {

    return (
        <div className="dashboard">
            <PageHeader>
                <H text="Dashboard Page"/>
            </PageHeader>
            <Wrapper>
                <div className="row">
                    <div className="col-md-8 col-12">
                        <div className="row">
                            {
                                data.summary.map((item, index) => (
                                    <div
                                        key={`summary=${index}`}
                                        className="col-12 col-md-6 col-sm-6 mb"
                                    >
                                        <SummaryBox
                                            colors={colors}
                                            title={item.title}
                                            subtitle={item.subtitle}
                                            value={item.value}
                                            percent={item.percent}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="hide-sm col-lg-4">
                        <LineChart
                            item={data.revenueSummary}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb">
                        <VerticalBarChart
                            item={data.revenueByMonths}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <div className="mb">
                            <OverallList
                                data={data.overall}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="mb">
                            <RevenueList
                                data={data.revenueByChannel}
                            />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default DashboardPage;
