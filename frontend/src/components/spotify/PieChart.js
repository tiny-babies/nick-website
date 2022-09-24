import React from 'react';

import { PieChartRender } from './PieChartRender';




class PieChart extends React.Component {
    constructor(props) {
        super(props);


        const artists = this.props.artists;

        let map = new Map();
        let grossGenres = 0;
        artists.forEach((artist) =>{
            // console.log(artist.genres);
            artist.genres.forEach((genre)=>{
                grossGenres +=1;
                if (map.has(genre)) {
                    map.set(genre, map.get(genre) + 1);
                } else {
                    map.set(genre, 1);
                }
            });
            
            
        })
        map.set("other", 0);
        let ridValue = 1;
        while(map.size > 18){
            ridValue += 1;
            for(const [key, value] of map){
                if(value < ridValue && key !== "other"){
                    map.delete(key);
                    map.set("other", map.get("other") + 1);
                }
                if(map.size === 18) break;

            }
        }

        let labels = [];
        let values = [];

        for (const [key, value] of map) {
           labels.push(key);
           values.push(value);

        }
        // console.log(map);

        

        this.data = {
            labels,
            datasets: [
                {
                    label: 'Genres',
                    data: values.map((value) => Math.round((value / grossGenres) * 100)),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(255, 159, 64, 0.8)',
                        'rgba(255, 205, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(201, 203, 207, 0.8)',
                        "rgba(255, 221, 0, 0.8)",
                        "rgba(255, 200, 0, 0.8)",
                        "rgba(255,166,0, 0.8)",
                        "rgba(255,124,67, 0.8)",
                        "rgba(249,93,106, 0.8)",
                        "rgba(212,80,135, 0.8)",
                        "rgba(160,81,149, 0.8)",
                        "rgba(102,81,145, 0.8)",
                        "rgba(47,75,124, 0.8)",
                        "rgba(29, 52, 130, 0.8)",
                        "rgba(10, 36, 66, 0.8)",
                    ], borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)',
                        "rgba(255, 221, 0, 1)",
                        "rgba(255, 200, 0, 1)",
                        "rgba(255,166,0, 1)",
                        "rgba(255,124,67, 1)",
                        "rgba(249,93,106, 1)",
                        "rgba(212,80,135, 1)",
                        "rgba(160,81,149, 1)",
                        "rgba(102,81,145, 1)",
                        "rgba(47,75,124, 1)",
                        "rgba(29, 52, 130, 1)",
                        "rgba(10, 36, 66, 1)",

                    ],
                    borderWidth: 1,
                },
            ],
        };



    }


    render() {

        if (this.data) {
            return <PieChartRender data={this.data} />
        }

        else
            return <h1 className="home-h1">Loading...</h1>


        
    }
}

export default PieChart;

