function Contact() {
    return (
        <>
            <section className="section" id="contact">
                <div className="container text-center">
                    <h6 className="" style={{ fontSize: "2.5em", color: "#493f75" }}>Contact Me</h6>

                    <form action="" className="contact-form col-md-10 col-lg-8 m-auto">
                        <div className="form-row">
                            <div className="form-group col-sm-6">
                                <input
                                    type="text"
                                    size={50}
                                    className="form-control"
                                    placeholder="Your Name"
                                    required=""
                                />
                            </div>
                            <div className="form-group col-sm-6">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Email"
                                    requried=""
                                />
                            </div>
                            <div className="form-group col-sm-12">
                                <textarea
                                    name="comment"
                                    id="comment"
                                    rows={6}
                                    className="form-control"
                                    placeholder="Write Something"
                                    defaultValue={""}
                                    required
                                />
                            </div>
                            <div className="form-group col-sm-12 mt-3">
                                <input
                                    type="submit"
                                    defaultValue="Send Message"
                                    className="btn btn-primary rounded"

                                />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>

    );
}

export default Contact;

