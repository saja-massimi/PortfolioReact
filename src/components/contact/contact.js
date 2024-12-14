import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_c9ouyqk", // Replace with your EmailJS Service ID
                "template_jynkto9", // Replace with your EmailJS Template ID
                form.current,
                "8XHlQIY_R1MIWkfp1"  // Replace with your EmailJS Public Key
            )
            .then(
                (result) => {
                    console.log("Email sent successfully:", result.text);
                    toast.success("Message sent successfully!");
                    e.target.reset();

                },
                (error) => {
                    console.error("Email sending failed:", error.text);
                    toast.error("Failed to send message. Please try again.");

                }
            );

        e.target.reset();
    };

    return (
        <section className="section" id="contact">
            <div className="container">
                <h6 style={{ fontSize: "2.5em", color: "#493f75" }}>Contact Me</h6>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <input
                                type="text"
                                name="user_name"
                                className="form-control"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <input
                                type="email"
                                name="user_email"
                                className="form-control"
                                placeholder="Enter Email"
                                required
                            />
                        </div>
                        <div className="form-group col-sm-12">
                            <textarea
                                name="message"
                                rows={6}
                                className="form-control"
                                placeholder="Write Something"
                                required
                            />
                        </div>
                        <div className="form-group col-sm-12 mt-3">
                            <input
                                type="submit"
                                value="Send Message"
                                className="btn btn-primary rounded"
                            />
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer /> {/* Add the ToastContainer */}

        </section>
    );
}

export default Contact;
