import React from "react";

class TopCategories extends React.Component{
    constructor(props){
        super(props);
        this.state={
            topCategory: "",
            songList: [],
        }

        
    }

    setSongListCategory(category){
        
    }

    componentDidMount() {

        let maxVal = 0;
        let topCategory = "acousticness";
        for (let i = 1; i < this.props.topTracksData.length; i++) {
            if (this.props.topTracksData[i].value > maxVal) {
                topCategory = this.props.topTracksData[i].key;
                maxVal = this.props.topTracksData[i].value;
            }
        }
        console.log(maxVal, topCategory);
        this.setState({
            topCategory,
        })

        let songList = [];

        for (let i = 0; i < this.props.topTracksDataEach.length; i++) {
            console.log(this.props.topTracks[i]);
            if (this.props.topTracksDataEach[i][topCategory] >= maxVal/50) {
                songList.push(this.props.topTracks[i]);
            }
            if(songList.length == 10) break;
        }
        console.log(songList);
        this.setState({
            songList,
        })
    }

    render(){

        let results;
        results = this.state.songList.map((song, index) => (

            <div className="artist-card" key={song.id}>
                <h1 className="home-h1">{index + 1}</h1>
                <span className="artist-img" style={{
                    backgroundImage: "url(" + song.album.images[0].url + ")"
                }}></span>
                <span className="home-h2 artist-info">
                    {song.name}
                </span>
            </div>
        ))


        return(

            

            <div>
                <h2 className="home-h2">
                    Your Top Category is: {this.state.topCategory.toUpperCase()}
                </h2>
                
                <h2 className="home-h2">
                    Here are your top songs in {this.state.topCategory.toUpperCase()}...
                </h2>

                <div id="artist-list">
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