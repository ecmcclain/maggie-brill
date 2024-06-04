import {Container, Row, Col} from 'react-bootstrap';

export default function ProjectCard ({project}){

    return (
        <Col xs={{span: 12}} 
                sm={{span: 12 }} 
                md={{span: 6}} 
                l={{span: 4}} 
                xl={{span: 4}}
                xxl={{span: 3}}
                className='cinCard'>
        <a className="projectLink" href={project.url}>
            <div className="card project">
            <div className="card-body project">
                <p className="projectTitle">{project.title}</p> 
            </div>
        </div>
        </a>
        </Col>
       
    )
}
