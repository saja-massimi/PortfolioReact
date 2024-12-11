function Navbar() {
    return (
        <>
            <header>
                <nav>
                    <img src="assets/logo.png" alt="logo" />
                    <ul>
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
                </nav>
                <div className="header-content">
                    <div className="header-content-text">
                        <p>Hello</p>
                        <p>I'm Saja Al-Massimi</p>
                        <p>Full Stack Developer</p>
                        <a href="#projects">
                            <button>My Projects</button>
                        </a>
                    </div>
                    <img src="assets/hero-img.png" alt="" />
                </div>
            </header>

        </>
    );
}

export default Navbar;