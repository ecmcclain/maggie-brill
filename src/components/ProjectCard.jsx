
export default function ProjectCard ({project}){

    return (
        <a className="projectLink" href={project.url}>
            <div className="card project">
            <div className="card-body project">
                <h2 className="projectTitle">{project.title}</h2> 
            </div>
        </div>
        </a>
       
    )
}
