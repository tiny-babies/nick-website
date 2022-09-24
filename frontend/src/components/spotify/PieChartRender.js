import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, defaults } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

defaults.color = "white";
defaults.font.size = 20;
const options = {
    
    elements: {

    },
    responsive: true,
    plugins: {
        legend: {
            display: true
        }
    },
};


export function PieChartRender(props) {
    return <Pie data={props.data} options={options} />;
}
