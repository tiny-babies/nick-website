import React from 'react';
import {
    defaults,
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
if (window.matchMedia('(max-device-width: 960px)').matches){
    defaults.font.size = '15'
}

const options = {
    scales: {
        yAxes: {
            ticks: {
                beginAtZero: true,
                color: 'white',
                fontSize: 90,
            }
        },
        xAxes: {
            max: 100,
            ticks: {
                beginAtZero: true,
                color: 'white',
            }
        },
    },
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            display: false
        }
    },
};




export function BarChartRender(props) {
    return <Bar options={options} data={props.data} width={200}/>;
}