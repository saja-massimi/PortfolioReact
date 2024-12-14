function ServiceBox({ service }) {
    return (<>
        <div className="box">
            <span>{service.icon}</span>
            <h1 style={{ fontSize: '1.5em' }}>{service.title}</h1>
            <p>
                {service.service}

            </p>
        </div>
    </>);
} export default ServiceBox;