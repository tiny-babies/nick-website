import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import logo from '../styles/logo.svg';
import AppNavbar from '../components/AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import WordGame from '../components/WordGame';
import Word from '../components/Word';




const Home = () => {

    const [nasaInfo, setNasaInfo] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('api/nasa/get')
            .then(response => response.json())
            .then(data => {
                setNasaInfo(data);
                setLoading(false);
            })
    }, []);

    console.log(nasaInfo["url"]);
    return (
        <body>
            <AppNavbar />
            
            <div className="App-body">
                <div id="space-image" className="text-white bg-dark">

                <div id="space-image-text">
                    <h1 >Welcome</h1>
                </div>
                        


                    
                </div>
                <img src={nasaInfo["hdurl"]} id="nasa-image" alt="Responsive image"></img>
                <img src={logo} className="App-logo" alt="logo" />
                <span className="App-text"> Hello, I am Nicolas Johnson this is a ton of text  Hello, I am Nicolas Johnson this is a ton of text Hello, I am Nicolas Johnson this is a ton of text Hello, I am Nicolas Johnson this is a ton of text Hello, I am Nicolas Johnson this is a ton of text</span>



                <WordGame />
            </div>
            <div className="my-info">
                <div className="my-card">
        
                </div>


            </div>
             {/* <Container fluid>
                 <Button color="link"><Link to="/groups">Manage JUG Tour</Link></Button>
             </Container> */}
        
        </body>
    );
}
// const Home = () => {
//     return (
//         <div>
//             <AppNavbar />
//             <Container fluid>
//                 <Button color="link"><Link to="/groups">Manage JUG Tour</Link></Button>
//             </Container>
//         </div>
//     );
// }

export default Home;