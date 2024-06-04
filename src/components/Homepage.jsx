import '../styles/Homepage.css'

import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import {cinProjects} from './CinProjects';
import ProjectCard from "./ProjectCard";

const Homepage = () => {
    return (
        <section id="homepage">
            <Container fluid className='cin'>
            {/* <Row>
                <Col xs={{span: 12}} 
                    sm={{span: 6 }} 
                    md={{span: 6}} 
                    l={{span: 4}} 
                    xl={{span: 4}}
                    className='cin'> */}
                    <div className='cards'>
                        {cinProjects.map((CinProject) => {
                            return (
                            <ProjectCard
                            project={CinProject}
                             />
                            );
                        })}
                    </div>
                {/* </Col>
            </Row> */}
            </Container>
        </section>
    )
}

export default Homepage



