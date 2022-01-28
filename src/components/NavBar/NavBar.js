import React from 'react';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown.js';
//Logo
import logo_mano from '../../img/logo_mano.png';

//Estilos
import './NavBar.css';

//Components
import CartWidget from '../../components/CartWidget/CartWidget';

function NavBar() {
    return (
        <nav className="navbar navbar-light navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo_mano} alt="imagen logo" width="60" />
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
                <CartWidget/>
                <div className='login-container'>
                    <h5>LogIn</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
