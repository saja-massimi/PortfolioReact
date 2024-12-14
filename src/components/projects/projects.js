import ProjectCard from './projectCard'
function projects() {

    const projects = [
        {
            title: "Notify JU",
            description: "A mobile application using Flutter for university students and staff where they can report different problems and send them directly to the concerned authorities.",
            link: "https://github.com/saja-massimi/notify_ju"
        },
        {

            title: "Fill Fun",
            description: "Fill Fun is an engaging trivia website featuring a variety of categories, making it fun and challenging for everyone to play and test their knowledge!",
            link: "https://github.com/saja-massimi/FillFun"
        },
        {
            title: "WAQT",
            description: "An e-commerce website specializing in watch sales, featuring an intuitive,responsive design focused on user experience.The platform includes advanced filtering and sorting by brand, material, price, and category, allowing users to find products easily.",
            link: "https://github.com/saja-massimi/waqt2"
        },
        {
            title: "MyJourney",
            description: " a travel planning website offering customized itinerary creation and seamless navigation through diverse travel options. This platform allows users to explore hotels and restaurants.",
            link: "https://github.com/saja-massimi/MyJourney"
        }
    ];
    return (
        <div>

            <section className="section" id="projects">
                <h1 style={{ fontSize: "2.5em", color: "#493f75" }}>Projects</h1>
                <div className="projectContent">
                    {projects.map((project, index) => {
                        return (
                            <ProjectCard project={project} key={index} />
                        );
                    })}
                </div>
            </section>

        </div>
    )
}

export default projects;