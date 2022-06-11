import React from 'react';
import {Bar} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

import './vertical-bar-chart.scss';
import Box from "../box";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const VerticalBarChart = ({item}) => {
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: {
                grid: {
                    display: true,
                    drawBorder: false
                }
            },
            yAxes: {
                grid: {
                    display: true,
                    drawBorder: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        elements: {
            bar: {
                backgroundColor: item.color,
                borderRadius: 15,
                borderSkipped: 'bottom'
            }
        }
    };

    const chartData = {
        labels: item.labels,
        datasets: [
            {
                label: 'Revenue',
                data: item.data
            }
        ]
    };

    return (
        <Box>
            <div className="title mb">
                Revenue by months
            </div>
            <div>
                <Bar options={chartOptions} data={chartData} height={`300px`} />
            </div>
        </Box>
    );
};

export default VerticalBarChart;