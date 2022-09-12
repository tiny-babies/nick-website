import React, {useEffect} from "react";
import "../styles/WordGame.css"

class WordGame extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: "words",
            currentRow: 1,
            currentCol: 1
        };
    }

    // componentDidMount() {
    //     fetch("/")
    //     // "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=5&api_key=bhplsuwpg5wbaawqggiomkl1ljxh9et6jgr2qj0f5138zz3f5"
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     items: result
    //                 });
    //             },
    //             // Note: it's important to handle errors here
    //             // instead of a catch() block so that we don't swallow
    //             // exceptions from actual bugs in components.
    //             (error) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     error
    //                 });
    //             }
    //         )
    // }

    keyDownHandler = event => {
        if(event.key === "Backspace"){
            
            console.log(this.state.currentCol);
            const tile = document.querySelector(`.board-module div:nth-of-type(${this.state.currentRow}) div:nth-of-type(${this.state.currentCol})`);
            tile.innerHTML = "";
            if(this.state.currentCol != 1) this.setState({ currentCol: this.state.currentCol - 1 });
            
        }
        else if(event.key.length === 1 && ((event.key >= 'A' && event.key <= "Z") || (event.key >= 'a' && event.key <= 'z') )){
            const tile = document.querySelector(`.board-module div:nth-of-type(${this.state.currentRow}) div:nth-of-type(${this.state.currentCol})` );
            if(this.state.currentCol === 5 && tile.innerHTML != ""){
                return;
            }
            tile.innerHTML = event.key.toUpperCase();
            if(this.state.currentCol != 5) this.setState({ currentCol: this.state.currentCol + 1 });
            console.log(this.state.currentCol);
        }else if(event.key == "Enter" && this.state.currentCol === 5){
            if(this.state.currentRow != 6 ) this.setState({
                currentCol: 1,
                currentRow: this.state.currentRow + 1
            })
        }

    }

    render() {
        document.addEventListener('keydown', this.keyDownHandler);
        // const{error, isLoaded, items, currentRow} = this.state;
        // console.log(items);
        // if (error) {
        //     return <div>Error: {error.message}</div>;
        // } else if (!isLoaded) {
        //     return <div>Loading...</div>;
        // } else {

            return (
                <div className="board-container dark">
                    <div className="board-module">
                        <div className="row-module">
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                        </div>
                        <div className="row-module">
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                        </div>
                        <div className="row-module">
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                        </div>
                        <div className="row-module">
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                        </div>
                        <div className="row-module">
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                        </div>
                        <div className="row-module">
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                            <div className="tile-module"></div>
                        </div>
                    </div>
                    

                </div>

                // <div className="board-container">
                //     <div className="board-module" style="width: 350px; height: 420px;">
                //         <div className="row-module" id="row-1">
                //                 <div className="tile-module" id="r1-t1">
                //                 </div>
                //                 <div className="tile-module" id="r1-t2">
                //                 </div>
                //                 <div className="tile-module" id="r1-t3">
                //                 </div>
                //                 <div className="tile-module" id="r1-t4">
                //                 </div>
                //                 <div className="tile-module" id="r1-t5">
                //                 </div>
                //         </div>
                //             <div className="row-module" id="row-2">
                //                 <div className="tile-module" id="r2-t1">
                //                 </div>
                                // <div className="tile-module" id="r2-t2">
                                // </div>
                //                 <div className="tile-module" id="r2-t3">
                //                 </div>
                //                 <div className="tile-module" id="r2-t4">
                //                 </div>
                //                 <div className="tile-module" id="r2-t5">
                //                 </div>
                //             </div>
                //             <div className="row-module" id="row-3">
                //                 <div className="tile-module" id="r3-t1">
                //                 </div>
                //                 <div className="tile-module" id="r3-t2">
                //                 </div>
                //                 <div className="tile-module" id="r3-t3">
                //                 </div>
                //                 <div className="tile-module" id="r3-t4">
                //                 </div>
                //                 <div className="tile-module" id="r3-t5">
                //                 </div>
                //             </div>
                //     </div>

                // </div>

            );

        // }





    }
}














export default WordGame;