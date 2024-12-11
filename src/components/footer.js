function Footer() {

    return (
        <>
            <footer>
                <p>© 2024 Saja Al-Massimi. All Rights Reserved.</p>
                <div className="footer-content">
                    <ul className="social-icons">
                        <li>
                            <a href="https://www.linkedin.com/in/saja-al-massimi/" target="_blank">
                                <i className="fab fa-linkedin" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/saja-massimi" target="_blank">
                                <i className="fab fa-github" />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:massimisaja@gmail.com">
                                <i className="fas fa-envelope" />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>

        </>
    );
}
export default Footer;