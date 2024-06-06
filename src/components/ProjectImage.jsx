import {Container, Row, Col} from 'react-bootstrap';

export default function ProjectImage ({image}){

    return (
        <Col xs={{span: 12}} 
                sm={{span: 12 }} 
                md={{span: 6}} 
                l={{span: 6}} 
                xl={{span: 6}}
                xxl={{span: 4}}
                >
            <img className="project-image" src={process.env.PUBLIC_URL + image}></img>
        </Col>
    )
}