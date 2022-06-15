import React from 'react';
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

import './line-chart.scss';
import Box from "../box";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = ({item}) => {

    const chartOptions = {
        responsive: true,
        scales: {
            xAxis: {
                display: false
            },
            yAxis: {
                display: false
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        elements: {
            point: {
                radius: 5
            }
        }
    };

    const chartData = {
        labels: item.chartData.labels,
        datasets: [
            {
                label: 'Revenue',
                data: item.chartData.data,
                borderColor: '#ffa500',
                tension: 0
            }
        ]
    };

    return (
        <Box height="full" color="primary">
            <div className="line-chart">
                <div className="line-chart__title">
                    {item.title}
                </div>
                <div className="line-chart__value">
                    {item.value}
                </div>
                <div className="line-chart__chart">
                    <Line options={chartOptions} data={chartData} width={`250px`} />
                </div>
            </div>
        </Box>
    )
};

export default LineChart;