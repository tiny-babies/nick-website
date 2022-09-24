import React from "react";

class TopCategories extends React.Component{
    constructor(props){
        super(props);
        this.state={
            category: 0,
            songList: [],
        }

        this.dropDownChange = this.dropDownChange.bind(this);
        
    }



    componentDidMount() {

        if(this.state.category === 0){
            let songList = [];
            for(let i = 0; i < this.props.topTracks.length; i++){
                if (i === 20) break;
                songList.push(this.props.topTracks[i]);
                
            }
            this.setState({
                songList,
            })
            return
        }

        let categoryName="acousticness"
        let maxVal = 0;

        

        if(this.state.category < this.props.topTracksData.length){
            categoryName = this.props.topTracksData[this.state.category].key;
            maxVal = this.props.topTracksData[this.state.category].value;
        }

        if (categoryName === "speechiness"){
            maxVal = maxVal / 3;
        }
        if (categoryName === "instrumentalness") {
            maxVal = maxVal / 2;
        }




        let songList = [];

        for (let i = 0; i < this.props.topTracksDataEach.length; i++) {
            // console.log(this.props.topTracks[i]);
            if (this.props.topTracksDataEach[i][categoryName] >= maxVal/50) {
                songList.push(this.props.topTracks[i]);
            }
            if(songList.length === 10) break;
        }
        // console.log(songList);
        this.setState({
            songList,
        })
    }
    

    dropDownChange(event){
        this.setState({
            category: event.target.value,
            songList: [],
        });
        let updateSongList = this.songListUpdate(event.target.value);
        // console.log(updateSongList);
        this.setState({
            songList: updateSongList,
        })

    }

    songListUpdate(category){


        if (false == category.toString()) {

            let songList = [];
            for (let i = 0; i < this.props.topTracks.length; i++) {
                if (i === 20) break;
                songList.push(this.props.topTracks[i]);
                
            }
            return songList;
        }
        let categoryName = "acousticness"
        let maxVal = 0;

        if (this.state.category < this.props.topTracksData.length) {
            categoryName = this.props.topTracksData[category].key;
            maxVal = this.props.topTracksData[category].value;
        }


        if (categoryName === "speechiness") {
            maxVal = maxVal / 3;
        }
        if (categoryName === "instrumentalness") {
            maxVal = maxVal / 2;
        }



        let songList = [];

        for (let i = 0; i < this.props.topTracksDataEach.length; i++) {
            
            if (this.props.topTracksDataEach[i][categoryName] >= maxVal / 50) {
                songList.push(this.props.topTracks[i]);

            }
            if (songList.length === 10) break;
        }

        return songList;
    }

    



    render(){

        let results;
        results = this.state.songList.map((song, index) => (

            <div className="artist-card" key={song.id}>
                <h1 className="home-h1">{index + 1}</h1>
                <span className="artist-img" style={{
                    backgroundImage: "url(" + song.album.images[0].url + ")"
                }}></span>
                <span className="artist-info">
                    <div className="song-name">{song.name}</div>
                    <div className="song-artist">{song.artists[0].name}</div>
                </span>
            </div>
        ))


        return(

            

            <div>
                
                <h2 className="home-h2">
                    Here are your top songs in... 
                </h2>
                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={this.dropDownChange} value={this.state.category}>
                    <option value={0}>Total</option>
                    <option value={1}>Acousticness</option>
                    <option value={2}>Danceability</option>
                    <option value={3}>Energy</option>
                    <option value={4}>Instrumentalness</option>
                    <option value={5}>Speechiness</option>
                    <option value={6}>Valence</option>
                </select>

                <div 
                key={this.state.category}
                id="artist-list">
                    {results.length ? (
                        results
                    ) : (
                        <h1 className="home-h1" style={{
                            height: '100vh'
                        }}>LOADING...</h1>
                    )}
                </div>


            </div>
        )
    }



}

export default TopCategories;