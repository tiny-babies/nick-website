import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import {ButtonGroup } from 'reactstrap';
// import TracksFeaturesChart from './TracksFeaturesChart';
import BarChart from './BarChart';
import '../../styles/Spotify.css'

class Metrics extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            topArtists: [],
            topTracks: [],
            topTracksData: [],
            rSelected: "medium_term"
        };
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    }

    async getUserTopArtists(rSelected){
        const response = await axios.get("http://localhost:8080/api/spotify/top-artists?time_range=" + rSelected);
        // console.log(response.data);
        return response.data;
    }

    async getUsersTopTracks(){
        const response = await axios.get("http://localhost:8080/api/spotify/top-tracks");
        // console.log(response.data);
        return response.data;
    }

    async getTopTrackData(){
        const resTopTracks = await this.getUsersTopTracks();
        this.setState({ topTracks: resTopTracks });

        let popularity = 0;
        resTopTracks.forEach((track) => {
            popularity += track.popularity;
        });

        let ids = [];
        resTopTracks.forEach((item) => {
            ids.push(item.id);
        });
        // console.log(ids.join())
        const endpoint = "http://localhost:8080/api/spotify/track-audio-features";
        let res = await axios.get(endpoint, {
            params: {
                ids: ids.join()
            }
        });
        // console.log(res.data)
       
        let map = new Map([
            ['acousticness', 0],
            ['danceability', 0],
            ['energy', 0],
            ['instrumentalness', 0],
            ['speechiness', 0],
            ['valence', 0],
        ]);


        res.data.forEach((track) => {
            for(const [feature, value] of Object.entries(track)){
                if (map.has(feature)){
                    // console.log("test");
                    map.set(feature, map.get(feature) + value);
                }
            }
            
        });
        map.set('speechiness', map.get('speechiness') * 3);
        map.set('instrumentalness', map.get('instrumentalness') * 2);
        let results = [];
        results.push({
            key: 'popularity',
            value: popularity / 100
        })
        map.forEach((val, key) => {
            results.push({
                key: key,
                value: val,
            });
        });
        // console.log(results);
        return results;

    }

    async componentDidMount(){
        const resTopTracksData = await this.getTopTrackData();
        const resTopArtists = await this.getUserTopArtists(this.state.rSelected);
        this.setState({
            topArtists: resTopArtists,
            topTracksData: resTopTracksData,
            isLoading: false
        });

    }

    async onRadioBtnClick(rSelected){
        this.setState({
            rSelected,
            topArtists: [],
            isLoaded: true
        });
        const res = await this.getUserTopArtists(rSelected);
    
        this.setState({
            topArtists: res, 
            isLoading: false
        })


    }

    render(){
        let results;
        results = this.state.topArtists.map((artist, index) => (
            
            <div className="artist-card" key={artist.id}>
                <h1 className="home-h1">{index + 1}</h1>
                <span className="artist-img" style={{
                    backgroundImage: "url(" + artist.images[0].url + ")"
                    }}></span>
                <span className="home-h2 artist-info">
                    {artist.name}
                </span>
            </div>



            
        ))

        return (
            <React.Fragment>
                <div className="app-body-container">
                    <div className="App-body">
                        <Button
                            className="submit-button"
                            variant="danger"
                            onClick={() => this.props.logout()}
                        >
                            Logout
                        </Button>


                        {this.state.topTracksData.length && (
                            <BarChart
                            key={this.state.topTracksData}
                            trackData={this.state.topTracksData}
                        />
                        )}
                        




                    <h1 className="home-h1" style={{
                        margin: '50px'
                    }}>Your Top Artists</h1>
                        <ButtonGroup className='mb-5'>
                            <Button variant="outline-warning" onClick={() => this.onRadioBtnClick("short_term")} active={this.state.rSelected === "short_term"}>One Month</Button>
                            <Button variant="outline-warning" onClick={() => this.onRadioBtnClick("medium_term")} active={this.state.rSelected === "medium_term"}>Six Months</Button>
                            <Button variant="outline-warning" onClick={() => this.onRadioBtnClick("long_term")} active={this.state.rSelected === "long_term"}>All Time</Button>
                        </ButtonGroup>
                    <div id="artost-list">
                    {results.length ? (
                        results
                    ) : (
                        <h1 className="home-h1">NO RESULTS</h1>
                    )}
                </div>

                </div>
                </div>
                
                
            </React.Fragment>
        )
    }



}

export default Metrics;
