import React from 'react';
import {
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


const labels = ['Popularity', 'Acousticness', 'Denceability', 'Energy', 'Instrumentalness', 'Speechiness', 'Valence'];


// export function BarChart() {
//     return <Bar options={options} data={data} />;
// }

class BarChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData: [],
        }
        
        this.options = {
            indexAxis: 'y',
            elements: {
                bar: {
                    borderWidth: 2,
                },
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Chart.js Horizontal Bar Chart',
                },
            },
        };

        const trackData = this.props.trackData;
        // console.log(trackData);

        let dataList = [];

        for (let i = 0; i < trackData.length; i++) {

            dataList.push(trackData[i].value);
        }

        console.log(dataList)
        dataList = dataList.map((item) => Math.round(item));

        this.data = {
            labels,
            datasets: [
                {
                    label: 'Mood Data',
                    data: dataList,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ], borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1,
                },
            ],
        };


        
    }
    

    render(){
        return <Bar option={this.options} data={this.data}/>
    }
}

export default BarChart;

