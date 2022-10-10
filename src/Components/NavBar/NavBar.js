import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <Link class="navbar-brand" to='/'>Merit Test</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/statistics">Statistics</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/blog">Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;