import React from 'react';
import '../styles/App.css';
import logo from '../styles/logo.svg';
import AppNavbar from '../components/AppNavbar';
import pieChartPic from '../styles/PieChartEx.png';
import barChartPic from '../styles/BaChartEx.png';
import courseListPic from '../styles/courseListEx.png'
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";





const Home = () => {



    return (
        <body>
            <AppNavbar />

            <div className="app-top-margin"></div>

            <div className="app-head" id="home-top">
                <h1 className="app-head-text"> NICOLAS JOHNSON </h1>
                <h2 className="app-head-text">SOFTWARE ENGINEER</h2>

            </div>
            <div className="app-body-container">

                <div className="App-body">


                    <div className="personal-card">

                        <div className="personal-card-img"></div>
                        <div className="personal-card-info">
                            <h1>Hello, I am Nicolas Johnson.</h1>
                            <h2>I am a University of California, Santa Barbara undergraduate for the class of 2023, and I am studying Computer Science with a 3.92 GPA.  My goal is to become a Software Developer and a Full-Stack Engineer.  </h2>
                        </div>
                    </div>


                    <h1 className="home-h1" id="home-resume">RESUME</h1>
                    <h2 className="home-h2">COURSEWORK:</h2>
                    <h3 className="home-h3">
                        <b>GPA: 3.92</b>
                        <br />
                        Advanced Applications Programming, Advanced Object Oriented Design C++, Operating Systems,  Computer Communication Networks, Advanced Data Structures and Algorithms, Automata and Formal Languages, Intro to Computational Science, Computer Architecture,  Intro to Computer Vision, Linear Algebra, Probability and Statistics, Differential Equations
                    </h3>
                    <h2 className="home-h2" id="home-projects">PROJECTS:</h2>
                    <h3 className="home-h3">
                        <b>WEB DEVELOPMENT:</b>
                        <br />
                        <br />
                        <a className="resume-link" href="/spotify">Spotify Analysis App </a>
                        <br></br>
                        This app allows a user to log into their Spotify account to see statistics about the songs that they listen to. I developed a Spring-Boot back-end that uses RESTful endpoints with the Spotify Web API.  I also developed the React front-end that consumes REST API from the Spring-Boot endpoints using Axios.  I created React components that compute additional insight into the Spotify song statistics, and I designed React pages and components to display the Spotify information with the help of Bootstrap and Chart.js. 
                        </h3>
                    <div className="website-info">
                            <img src={pieChartPic} alt="img"  style={{width: "50%",}}></img>
                        <img src={barChartPic} alt="img" style={{width: "50%",}}></img>
      
                    </div>

                    <h3 className="home-h3">
                        <br></br>
                        <br></br>
                        <a className="resume-link" href="https://github.com/ucsb-cs156-w22/team04-w22-5pm-courses" target="_blank" rel="noopener noreferrer">Course-Search Web App: </a>
                        <br></br>
                        Team-based project for CS156: Advanced Applications Programming.  Simulated an Agile Environment with extensive GitHub work.  I developed back-end API endpoints to establish CRUD operations with MongoDB to store the users' course schedule data.  I helped create the API endpoint used to query for all courses at UC Santa Barbara.  The back-end was done in with Spring-Boot with Pitest and JUnit testing.  In the front-end, I created React components that consumes the RESTful API endpoints to the back-end to create pages for listing and creating student schedules.  Front-End testing was done with Jest and mutation testing with Stryker.  Class Grade: A+. (WINTER 2022)
                        </h3>

                    <div className="website-info">
                        <img src={courseListPic} alt="img" style={{ width: "50%", }}></img>
       

                    </div>

                        <h3 className="home-h3">
                        <br></br>
                        <br></br>
                        <a className="resume-link" href="https://github.com/tiny-babies/YelpCamp" target="_blank" rel="noopener noreferrer">Yelp-Camp: </a>
                        <br></br>
                        Following Colt Steele's Web Developer BootCamp course, I created a mimic of a campsite-rating app with Express/ejs, Node.js, and MongoDB.
                        </h3>
                        <div className="website-info">
                            <img src="https://user-images.githubusercontent.com/91104605/154908871-31ced5e6-c535-475b-8de0-bffae6df44dd.png" alt="img" style={{ width: "50%", }}></img>
                            <img src="https://user-images.githubusercontent.com/91104605/154909027-deb11710-7ff9-47c3-86d4-ff7505c1c35a.png" alt="img" style={{ width: "50%", }}></img>
                        </div>

                        <h3 className="home-h3">
                        <br></br>
                        <br></br>
                        <b>VIDEO GAME DEVELOPMENT:</b>
                        <br />
                        <br />
                        <a className="resume-link" href="https://github.com/tiny-babies/VaxMan" target="_blank" rel="noopener noreferrer">Vax-Man: </a>
                        <br></br>
                        Used Python PyGame to code multiple versions of Pac-Man.  Rendered my own map, enemy AI, and game logic using Python.
                        </h3>
                    <div className="website-info">
                        <img src="https://user-images.githubusercontent.com/91104605/154907911-c621400b-da7e-4d53-b98c-f822643d8571.png" alt="img" style={{ width: "50%", }}></img>

                    </div>
                        <h3 className="home-h3">
                        <br />
                        <br />
                        <u>2D Strategy War-Game (in development) using Godot Engine</u> - I created a map and grid of tile objects that record the state of the game and the army troops in each tile.  I made the scripts for loading graphics into each tile.  I created the UI for possible player actions and the game manager scripts to move army troops from tile to tile.

                        <br />
                        <br />
                        <b>SCHOOL PROJECTS:</b>
                        <br />
                        <br />
                        <u>CS 170: Operating Systems</u> - Created an operating system that handles simple unix system calls using multi-threading, memory management, and interrupt/error handling in MIPS simulated hardware.  Class Grade: A. (SPRING 2022)


                    </h3>

                    <h2 className="home-h2">RESEARCH: UCSB EARLY SCHOLARS RESEARCH PROGRAM</h2>
                    <h3 className="home-h3">
                        "Quantifying Gerrymandering by using the Recombination Markov Chain and Score Function" with Professor Eric Vigoda and Andy Wu - I worked with Andy to research and help design a Markov Chain, redistricting algorithm that uses a probabilistic distribution function to generate a more dependable distribution of redistricting plans.  A large set of redistricting plans is generated on this distribution to be compared with real districting plans to observe for state gerrymandering.  We made an official <a href="http://drive.google.com/file/d/1s79BnT6d1pmmeE_gUNsveg5YHcDD9fzX/view?usp=sharing">Project-Proposal</a>
                        and wrote <a href="https://petalite-spectrum-f97.notion.site/ERSP-Research-Log-Nicolas-Johnson-71088bacd272474ab7cd8245e15b1513">Logs</a> to record our progress (FALL 2021)
                    </h3>

                    <div id="resume-transcript-wrapper">
                        <a href="https://drive.google.com/file/d/1KQCOTKKEqtnl5Bam4fOfhjtFFtfZlYPd/view?usp=sharing" target="_blank" className="resume-btn" rel="noopener noreferrer">RESUME</a>
                        <a href="https://drive.google.com/file/d/1tzby_180c9RCnKy7f8fYw91SmHvqX_an/view?usp=sharing" target="_blank" className="resume-btn" rel="noopener noreferrer">TRANSCRIPT</a>
                    </div>




                    <h1 className="home-h1">WEB-APP FEATURES:</h1>
                    <div className="website-info">
                        <div className="website-info-box">
                            <div id="react-title-holder">
                                <img src={logo} className="App-logo" alt="logo" />
                                <h1 id="react-info-title">React.js</h1>
                            </div>

                            <h2 className="website-info-text">Front-End pages and components created using React and Bootstrap.  Axios used to consume REST API from the backend.</h2>
                        </div>
                        <div className="website-info-box">
                            <div id="spring-info-title">
                                Spring-Boot
                            </div>
                            <div className="website-info-text">
                                Back-End made with Spring-Boot to develop simple REST API endpoints with some fun public APIs such as with Spotify.
                            </div>
                        </div>

                    </div>
                    <div className="contact" id="home-contact">
                        njohnson@ucsb.edu
                        <ul id="contact-list">
                            <li>
                                <a className="btn btn-lg btn-outline-info" href="https://www.linkedin.com/in/njohnsonucsb" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin contact-icon" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                    LinkedIn
                                </a>
                            </li>

                            <li>
                                <a href="https://github.com/tiny-babies" target="_blank" className="btn btn-lg btn-outline-info" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github contact-icon" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                    GitHub
                                </a>
                            </li>


                        </ul>
                        <br></br>
                        Santa Barbara, 93117 <br/>
                        California, USA
                    </div>




                </div>

            </div>





        </body>
    );
}

export default Home;