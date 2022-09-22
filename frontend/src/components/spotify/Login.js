import React from "react";
import Button from "react-bootstrap/Button";


function Login(props){
    if(props.isLoggedIn){
        return null;
    }

    return(
        <div className="app-body-container" style={{height: '100vh'}}>
            <div className="App-body">
                <h1 className="home-h1" style={{marginBottom: '10vh'}}>LOGIN TO YOUR SPOTIFY ACCOUNT</h1>
                 <Button
                    className="submit-button"
                    variant="success"
                    onClick={()=>props.login()}
                    >
                    Login
                    </Button>
            </div>
        </div>

    )

}

export default Login;