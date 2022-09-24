import React from "react";
import Login from '../components/spotify/Login';
import Metrics from '../components/spotify/Metrics';
import axios from "axios";
import AppNavbar from '../components/AppNavbar';



class Spotify extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            isLoggedIn: false,
            token: null
        };
    }



    componentDidMount(){
        // let jsonRes, textRes;
            fetch("api/spotify/auth-token")
            .then(response => response.text())
            .then(response => {
                console.log(response)
                if(!response.length ||  response.indexOf("status") >= 0){
                
                    this.setState({
                        token: null,
                    })
                } else {

                    this.setState({
                    token: response,
                });
                }
                
            });
        
        
    }


    async logout() {
        this.setState({
            token: null,
            isLoggedIn: false,
        });
        await axios.post("http://localhost:8080/api/spotify/logout");
        
    }

    login(){
        fetch("api/spotify/login", {
            mode: 'no-cors'
        })
            .then((response) => {
                return response.text();
            })
            .then(response => {
                window.location.replace(response);
            });
        this.setState({
            isLoggedIn: true,
        });
    }

    render(){
        return(
            <div>
                <AppNavbar/>
                <div className="app-top-margin"></div>
                {!this.state.token && (

                    
                    <Login
                        isLoggedIn={this.state.isLoggedIn}
                        login={() => this.login()}
                    />
                )}
                {this.state.token && (
                    <Metrics
                    logout={() => this.logout()}
                    />
                    
                )}
            </div>
        )
    }


}

export default Spotify;




