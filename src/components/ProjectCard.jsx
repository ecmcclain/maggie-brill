import {Link} from 'react-router-dom';


export default function ProjectCard ({project}){

    return (
        // <Col xs={{span: 12}} 
        //         sm={{span: 12 }} 
        //         md={{span: 6}} 
        //         l={{span: 6}} 
        //         xl={{span: 6}}
        //         xxl={{span: 4}}
        //         className='cinCard'>
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
        // </Col>
       
    )
}
