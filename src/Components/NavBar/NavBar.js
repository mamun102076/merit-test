import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <NavLink className="navbar-brand" to='/'>Merit Test</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/statistics">Statistics</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;