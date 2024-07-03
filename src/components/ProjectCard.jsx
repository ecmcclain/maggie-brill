import {Link} from 'react-router-dom';


export default function ProjectCard ({project}){

    return (
        <Link className="projectLink" to={project.url}>
            <div className="card project" style={{backgroundImage: `url('${project.cover}')`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'}}>
            <div className="card-body project">
                <p className="projectTitle">{project.title}</p> 
            </div>
        </div>
        </Link>
       
    )
}
