import '../styles/CinProject.css'

import React, {useRef} from "react";
import { useParams } from "react-router-dom";
import {cinProjects} from './CinProjects';

import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function CinProject (){
    const { CinProjectUrl } = useParams();
    const url = `cinematography/${CinProjectUrl}`
    let project = useRef(null);
    for (const tempProject of cinProjects){
        if (tempProject['url'] == url){
            project = tempProject;
        }
    }

    return (
        <section id="cin-project">
        <Container>
            <Col>
            <Row>
                <Card>
                    <h3>{project.title}</h3>
                    <h4>{project.director}</h4>
                    <h4>{project.type} | {project.genre} | {project.time}</h4>
                    <h4><a href={project.link}>{project.linktxt}</a></h4>
                </Card>
            </Row>
            <Row>
                <Card>

                </Card>
            </Row>
            </Col>
        </Container>
       </section>
    )
}

