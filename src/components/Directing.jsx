import '../styles/Homepage.css'

import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import {dirProjects} from './DirProjects';
import ProjectCard from "./ProjectCard";

const Directing = () => {
    return (
        <section id="directing">
            <Container fluid className='cin'>
                    <Row>
                    {dirProjects.map((DirProject) => {
                        return (
                        <ProjectCard
                        project={DirProject}
                            />
                        );
                    })}
                    </Row>
            </Container>
        </section>
    )
}

export default Directing



