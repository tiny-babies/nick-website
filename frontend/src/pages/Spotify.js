import React, {useState, useEffect} from "react";
import Login from '../components/spotify/Login';
import Metrics from '../components/spotify/Metrics';
import Button from "react-bootstrap/Button";
import axios from "axios";



class Spotify extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            isLoggedIn: false,
            token: null
        };
    }



    componentDidMount(){
        fetch("api/spotify/auth-token")
            .then(response => response.text())
            .then(response => {
                this.setState({
                    token: response
                });
            });
    }


    async logout() {
        this.setState({
            token: null
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




