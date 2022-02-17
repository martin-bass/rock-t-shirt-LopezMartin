import React from 'react';
import { Link } from 'react-router-dom';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown.js';

//Logo
import logo_mano from '../../img/Logo/logo_mano.png';

//Estilos
import './NavBar.css';

//Components
import CartWidget from '../../components/CartWidget/CartWidget';
import ItemList from '../../views/Category/ItemList/ItemList';

function NavBar() {
    return (
        <nav className="navbar navbar-light navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to='/' style={{ textDecoration: 'none' }}>
                    <img src={logo_mano} alt="imagen logo" width="60" />
                    <h3 className="logo">Rock T-Shirt</h3>
                </Link>
                <ul className="navbar-nav">
                    <Link className="nav-link" to='/items' style={{ textDecoration: 'none' }}>
                        <li className="nav-item">
                            PRODUCTOS
                        </li>
                    </Link>
                    <Link className="nav-link" to='/category/2' style={{ textDecoration: 'none' }}>
                        <li className="nav-item">
                            MEN
                        </li>
                    </Link>
                    <Link className="nav-link" to='/category/3' style={{ textDecoration: 'none' }}>
                        <li className="nav-item">
                            WOMEN
                        </li>
                    </Link>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">ARTIST</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">AC/DC</a></li>
                            <li><a className="dropdown-item" href="#">Metallica</a></li>
                            <li><a className="dropdown-item" href="#">Led Zeppelin</a></li>
                            <li><a className="dropdown-item" href="#">Foo Fighters</a></li>
                        </ul>
                    </li>
                    <Link className="nav-link" to='/category/1' style={{ textDecoration: 'none' }}>
                        <li className="nav-item">
                            STORES
                        </li>
                    </Link>
                </ul>
                <Link to='/cart' style={{ textDecoration: 'none' }}>
                    <CartWidget/>
                </Link>
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
