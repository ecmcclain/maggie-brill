import '../styles/CinProject.css'

import React, {useRef} from "react";
import { useParams } from "react-router-dom";
import {dirProjects} from './DirProjects';

import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import ProjectImage from "./ProjectImage";


export default function DirProject (){
    const { DirProjectUrl } = useParams();
    const url = `directing/${DirProjectUrl}`
    let project = useRef(null);
    for (const tempProject of dirProjects){
        if (tempProject['url'] == url){
            project = tempProject;
        }
    }

    const projImages = project.imgs

    return (
        <section id="cin-project">
        <Container fluid className='head-container'>
            <Col>
            <Row>
                <Card className='head'>
                    <h5>{project.title}</h5>
                    <h6>{project.director}</h6>
                    <h6>{project.type} | {project.genre} | {project.time}</h6>
                    <h6><a className='link' href={project.link}>{project.linktxt}</a></h6>
                </Card>
            </Row>
            <Row>
                <Container className='images'>
                    <Row>
                    {projImages.map((ProjImage) => {
                            return (
                            <ProjectImage
                            image={ProjImage}
                                />
                            );
                        })}
                    </Row>
                </Container>
            </Row>
            </Col>
        </Container>
       </section>
    )
}

