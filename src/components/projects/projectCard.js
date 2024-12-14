
function ProjectCard({ project }) {
    return (
        <div className="projects">
            <h3>{project.title}</h3>
            <p>

                {project.description}
            </p>
            <a href={project.link} target="_blank">
                <button>View Project Repository</button>
            </a>
        </div>
    );
}
export default ProjectCard;