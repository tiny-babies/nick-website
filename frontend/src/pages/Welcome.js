import React, { useEffect, useState } from 'react';
import '../styles/Welcome.css';





const Welcome = () => {

    return (
        <div className="welcome">


        <body className="d-flex text-center text-white bg-dark">
            <div className="cover-container welcome-cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <header className="mb-auto">
                    <div>
                        <h3 className="float-md-start mb-0">Welcome</h3>
                        <nav className="nav float-md-end nav-masthead justify-content-center">
                            <a href="#" aria-current="page" className="welcome-nav-link nav-link active">About Me</a>
                            <a href="/" className="welcome-nav-link nav-link">Resume</a>
                            <a href="/" className="welcome-nav-link nav-link">Arcade</a>
                        </nav>
                    </div>
                </header>
                <main className="px-3">
                    <h2 className="welcome-h2">Nicolas Johnson</h2>
                    <br/>
                    <br/>
                    <h1 className="welcome-h1">Full-Stack Engineer</h1>
                    <br />
                    <br />
                    <br />
                    <br />
                    <p className="lead"> Take a look around my website, check out my arcade portfolio, and learn about my capabilities as a Full-Stack (Front-End oriented) engineer.</p>
                    <br />
                    <br />
                    <a href="/about" className="btn btn-large welcome-btn-secondary btn-secondary font-weight-bold">About Me</a>

                </main>
                <footer className="welcome-footer mt-auto text-white-50">

                </footer>
            </div>



        </body>
        </div>
    );
}


export default Welcome;