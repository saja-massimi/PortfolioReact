import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Hero from '../../assets/hero-img.png';
import Logo from '../../assets/logo.png';
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopIndex, setLoopIndex] = useState(0);
    const texts = ["I'm Saja Al-Massimi", "Full Stack Developer"];
    const typingSpeed = 200;
    const deletingSpeed = 50;
    const pauseTime = 1500;
    useEffect(() => {
        const handleTyping = () => {
            const currentWord = texts[loopIndex % texts.length];

            if (!isDeleting) {
                setCurrentText(currentWord.slice(0, currentIndex + 1));
                setCurrentIndex((prev) => prev + 1);

                if (currentIndex === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                setCurrentText(currentWord.slice(0, currentIndex - 1));
                setCurrentIndex((prev) => prev - 1);

                if (currentIndex === 0) {
                    setIsDeleting(false);
                    setLoopIndex((prev) => prev + 1);
                }
            }
        };

        const timer = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timer);
    }, [currentIndex, isDeleting, loopIndex]);

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
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="header-content">
                    <div className="header-content-text">

                        <p className="typing-text">{currentText}</p>

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
