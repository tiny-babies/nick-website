import React from "react";
import { Bar } from "react-chartjs-2";

class TrackFeaturesChart extends React.Component {
    constructor(props){
        super(props);
        this.chartRef = React.createRef();

        this.state = {
            chartData: [],
        }

        // this.state= {
        //     formattedData: {
        //         fLabels: [],
        //         fDatasets: [
        //             {
        //                 label: '',
        //                 label: 'Moods',
        //                 data: [],
        //                 backgroundColor: [
        //                     'rgba(255, 99, 132, 0.2)',
        //                     'rgba(255, 159, 64, 0.2)',
        //                     'rgba(255, 205, 86, 0.2)',
        //                     'rgba(75, 192, 192, 0.2)',
        //                     'rgba(54, 162, 235, 0.2)',
        //                     'rgba(153, 102, 255, 0.2)',
        //                     'rgba(201, 203, 207, 0.2)'
        //                 ], borderColor: [
        //                     'rgb(255, 99, 132)',
        //                     'rgb(255, 159, 64)',
        //                     'rgb(255, 205, 86)',
        //                     'rgb(75, 192, 192)',
        //                     'rgb(54, 162, 235)',
        //                     'rgb(153, 102, 255)',
        //                     'rgb(201, 203, 207)'
        //                 ],
        //                 borderWidth: 1
        //             }
        //         ]
        //     }
        // }
    }

    componentDidMount(){
        const trackData  = this.props.trackData;
        // console.log(trackData);
        let tlabels = [];
        let dataList = [];

        for (let i = 0; i < trackData.length; i++){
            tlabels.push(trackData[i].key);
            dataList.push(trackData[i].value);
        }
        console.log(tlabels)
        console.log(dataList)
        dataList = dataList.map((item) => Math.round(item));

        let tchartData = {
            labels: tlabels,
            datasets: [
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
        }

        this.setState({
            chartData: tchartData
        }, () => {
            console.log(this.state.chartData);

        });

    }


    render() {
        return(
            <div>
            {this.state.chartData.hasOwnProperty("labels") && (
                <Bar
              data={this.state.chartData}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: "Cryptocurrency prices"
                            },
                            legend: {
                                display: true,
                                position: "bottom"
                            }
                        }
                    }}
              />
            )}
              
            </div>
            
        );
    }

}

export default TrackFeaturesChart;