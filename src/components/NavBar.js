import React from 'react';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown'

import logo_mano from '/Users/macbookpro/Desktop/CODERHOUSE/Curso_ReactJS/T-Shirt-Rock-Store_LopezMartin/rock-t-shirt/src/img/logo_mano.png';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar navbar-light navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo_mano} alt="" width="60" />
                    <h3 className="logo">Rock T-Shirt</h3>
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">SUMMER SALE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">MEN</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">WOMEN</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">ARTIST</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">AC/DC</a></li>
                            <li><a className="dropdown-item" href="#">Metallica</a></li>
                            <li><a className="dropdown-item" href="#">Led Zeppelin</a></li>
                            <li><a className="dropdown-item" href="#">Foo Fighters</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
