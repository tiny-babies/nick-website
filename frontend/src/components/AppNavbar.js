import React from 'react';
import { Navbar} from 'reactstrap';

const AppNavbar = () => {


    return (
        <header className="mb-auto">


            <Navbar dark className="justify-content-between navbar-expand-lg App-nav fixed-top">
                {/* Must fix the toggle */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link app-nav-item" id="app-nav-home" href="/">Home </a>
                    </li>
                    <li className="nav-item">
                            <a className="nav-link app-nav-item" id="app-nav-resume" href="/">Resume</a>
                    </li>
                    <li className="nav-item">
                            <a className="nav-link app-nav-item" id="app-nav-portfolio" href="/">Portfolio</a>
                    </li>
                    <li className="nav-item">
                            <a className="nav-link app-nav-item" id="app-nav-contact" href="/">Contact</a>
                    </li>
                </ul>

            </div>
        </Navbar >
        </header>

        
    );
};

export default AppNavbar;