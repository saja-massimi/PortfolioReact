import './service.css';
import ServiceBox from './serviceBox';

function Services() {
    const services = [
        {
            icon: <i className="fas fa-desktop icon" />,
            title: "Full-Stack Development",
            service: "Develop end-to-end web applications using modern frameworks and technologies."
        },
        {
            icon: <i className="fas fa-paint-brush icon" />,
            title: "User Interface (UI) Design",
            service: "Translating design mockups from tools like Figma, Sketch, or Adobe XD into high-quality, responsive web pages."
        }
    ];


    return (
        <div>
            <section className="section" id="services">
                <h1 style={{ fontSize: "2.5em", color: "#493f75" }}>Services</h1>
                <div className="servicesContent">

                    {
                        services.map((service, index) => (
                            <ServiceBox service={service} key={index} />
                        ))

                    }
                </div>
            </section>

        </div>
    );
}

export default Services;