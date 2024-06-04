import '../styles/Homepage.css'

import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import {cinProjects} from './CinProjects';
import ProjectCard from "./ProjectCard";

const Homepage = () => {
    return (
        <section id="homepage">
            <Container fluid className='cin'>
                <div className='cards'>
                    <Row>
                    {cinProjects.map((CinProject) => {
                        return (
                        <ProjectCard
                        project={CinProject}
                            />
                        );
                    })}
                    </Row>
                    </div>
            </Container>
        </section>
    )
}

export default Homepage



