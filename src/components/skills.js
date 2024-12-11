function Skills() {
    return (
        <div>

            <section className="section">
                <h1 style={{ fontSize: "2.5em", color: "#493f75" }}>Skills</h1>
                <div id="skills">
                    <div className="circle circle1">
                        <p>HTML5 &amp; CSS3</p>
                        <img src="assets/html.png" alt="" />
                    </div>
                    <div className="circle circle2">
                        <p>Javascript</p>
                        <img src="assets/javascript.png" alt="" />
                    </div>
                    <div className="circle circle3">
                        <p>Flutter</p>
                        <img src="assets/flutter.png" alt="" />
                    </div>
                    <div className="circle circle4">
                        <p>UI/UX Design</p>
                        <img src="assets/uiux.png" alt="" />
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Skills;