import React from 'react';

import { BarChartRender } from './BarChartRender';



const labels = ['Popularity', 'Acousticness', 'Denceability', 'Energy', 'Instrumentalness', 'Speechiness', 'Valence'];



class BarChart extends React.Component {
    constructor(props) {
        super(props);


        const trackData = this.props.trackData;
        // console.log(trackData);

        let dataList = [];

        for (let i = 0; i < trackData.length; i++) {

            dataList.push(trackData[i].value);
        }

        // console.log(dataList)
        dataList = dataList.map((item) => Math.round(item) * 2);

        this.data = {
            labels,
            datasets: [
                {
                    label: 'Mood Data',
                    data: dataList,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(255, 159, 64, 0.5)',
                        'rgba(255, 205, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(201, 203, 207, 0.5)'
                    ], borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                },
            ],
        };


        
    }
    

    render(){
        if(this.data){
            return <BarChartRender data={this.data}/>
        }
        
        else
        return <h1 className="home-h1">Loading...</h1>
    }
}

export default BarChart;

