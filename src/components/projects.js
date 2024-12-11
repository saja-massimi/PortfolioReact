function projects() {
    return (
        <div>

            <section className="section" id="projects">
                <h1 style={{ fontSize: "2.5em", color: "#493f75" }}>Projects</h1>
                <div className="projectContent">
                    <div className="projects">
                        <h3>Notify JU</h3>
                        <p>
                            {" "}
                            a mobile application using Flutter for university students and staff
                            where they can report different problems and send them directly to the
                            concerned authorities.
                        </p>
                        <a href="https://github.com/saja-massimi/notify_ju" target="_blank">
                            <button>View Project Repository</button>
                        </a>
                    </div>
                    <div className="projects">
                        <h3>Regapp</h3>
                        <p>
                            Developed a CRUD employee management system using ASP.NET core, SQL
                            Server , EF Core, RestFul API, and React JS
                        </p>
                        <a href="https://github.com/saja-massimi/RegApp" target="_blank">
                            <button>View Project Repository</button>
                        </a>
                    </div>
                    <div className="projects">
                        <h3>MediMind</h3>
                        <p>
                            {" "}
                            an app using Flutter that enables patients to manage their medications
                        </p>
                        <a href="https://github.com/saja-massimi/medimind" target="_blank">
                            <button>View Project Repository</button>
                        </a>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default projects;