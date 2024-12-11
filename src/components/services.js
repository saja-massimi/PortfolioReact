function Services() {
    return (
        <div>
            <section className="section" id="services">
                <h1 style={{ fontSize: "2.5em", color: "#493f75" }}>Services</h1>
                <div className="servicesContent">
                    <div className="box">
                        <i className="fas fa-desktop icon" />
                        <h1>Front-end Development</h1>
                        <p>
                            {" "}
                            Building dynamic and visually appealing websites using the latest
                            front-end technologies.
                        </p>
                    </div>
                    <div className="box">
                        <i className="fas fa-paint-brush icon" />
                        <h1>User Interface (UI) Design</h1>
                        <p>
                            Translating design mockups from tools like Figma, Sketch, or Adobe XD
                            into high-quality, responsive web pages.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Services;