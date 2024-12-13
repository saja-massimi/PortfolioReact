import React, { useState } from 'react';
import './Navbar.css';
import Hero from '../../assets/hero-img.png';
import Logo from '../../assets/logo.png';
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header>
                <nav>
                    <div className="nav-container">
                        <a href='#'> <img src={Logo} alt="logo" className="logo" /></a>
                        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                            <li>
                                <a href="#services">Services</a>
                            </li>
                            <li>
                                <a href="#skills">Skills</a>
                            </li>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                            <li>
                                <a href="#testimonials">Testimonials</a>
                            </li>
                            <li>
                                <a href="#highlights">Highlights</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="header-content">
                    <div className="header-content-text">
                        <p>I'm Saja Al-Massimi</p>
                        <p>Full Stack Developer</p>
                        <a href="#projects">
                            <button>My Projects</button>
                        </a>
                    </div>
                    <img src={Hero} alt="hero" />
                </div>
            </header>
        </>
    );
}

export default Navbar;
