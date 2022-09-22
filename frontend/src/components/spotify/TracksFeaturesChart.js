import React from "react";
import Chart from "chart.js/auto"

class TrackFeaturesChart extends React.Component {
    constructor(props){
        super(props);
        this.chartRef = React.createRef();
        this.state= {
            formattedData: {
                fLabels: ['January', 'February', 'March',
                    'April', 'May'],
                fDatasets: [
                    {
                        label: 'Rainfall',
                        backgroundColor: 'rgba(75,192,192,1)',
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 2,
                        data: [65, 59, 80, 81, 56]
                    }
                ]
            }
        }
    }

    componentDidMount(){
        const trackData  = this.props.trackData;
        // console.log(trackData);
        let labels = [];
        let dataList = [];

        for (let i = 0; i < trackData.length; i++){
            labels.push(trackData[i].key);
            dataList.push(trackData[i].value);
        }
        console.log(labels)
        console.log(dataList)
        dataList = dataList.map((item) => Math.round(item));

        let dataSets = [
            {
                label: 'Moods',
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
                borderWidth: 1

            }
        ]

        let totalData = {
            labels,
            dataSets
        }

        this.setState({
            formattedData: totalData
        })

        if(this.state.theChart){
            this.state.theChart.destroy();
        }
        let theChart = new Chart(this.chartRef.current, {
            type: "bar",
            data: this.state.formattedData,
            options: {
                legend: {
                    position: "bottom",
                },
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            return (
                                data["labels"][tooltipItem["index"]] +
                                ": " +
                                data["datasets"][0]["data"][tooltipItem["index"]] +
                                "%"
                            );
                        },
                    }
                },

                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
        });

        this.setState({
            theChart
        })

        

    }

    render() {
        return(
            <div>
               <canvas ref={this.chartRef} id="trackChart"></canvas>
            </div>
            
        );
    }

}

export default TrackFeaturesChart;