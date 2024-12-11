function tetimonials() {
    return (
        <div>


            <section className="section" id="testimonials">
                <h1 style={{ fontSize: "2.5em", color: "#493f75" }}>Testimonials</h1>
                <div className="testimonialContent">
                    <div className="testimonialCard">
                        <img src="assets/person.png" alt="" />
                        <div clas="cardContent">
                            <p>
                                Working with Saja was an absolute pleasure! Her attention to detail
                                and ability to build functional websites and apps was impressive.Not
                                only did she meet deadlines, but she also provided valuable input on
                                improving the user experience.
                            </p>
                            <p style={{ color: "#493f75", textAlign: "left" }}>-Aman Aloudat</p>
                        </div>
                    </div>
                    <div className="testimonialCard">
                        <img src="assets/person.png" alt="" />
                        <div clas="cardContent">
                            <p>
                                Saja is a great person to work with, always on time, hardworking and
                                full of innovative ideas.
                            </p>
                            <p style={{ color: "#493f75", textAlign: "left" }}>-Hala Shahin</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default tetimonials;