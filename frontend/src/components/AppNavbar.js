import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="mb-auto">


            <Navbar dark className="justify-content-between navbar-expand-lg App-nav">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link " href="/">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="/">Contact</a>
                    </li>
                </ul>

            </div>
        </Navbar >
        </header>

        
    );
};

export default AppNavbar;