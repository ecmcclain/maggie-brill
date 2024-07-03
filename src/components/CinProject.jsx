import '../styles/CinProject.css'

import React, {useRef} from "react";
import { useParams } from "react-router-dom";
import {cinProjects} from './CinProjects';

import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import ProjectImage from "./ProjectImage";


export default function CinProject (){
    const { CinProjectUrl } = useParams();
    const url = `${CinProjectUrl}`
    let project = useRef(null);
    for (const tempProject of cinProjects){
        if (tempProject['url'] === url){
            project = tempProject;
        }
    }

    const projImages = project.imgs

    return (
        <section id="cin-project">
        <Container fluid className='head-container'>
            <Col>
            <Row className='head-container'>
                <Card className='head' style={{backgroundImage: `url(${project.cover})`}}>
                    <h5>{project.title}</h5>
                    <h6>{project.director}</h6>
                    <h6>{project.type} | {project.genre} | {project.time}</h6>
                    <h6><a className='link' href={project.link}>{project.linktxt}</a></h6>
                </Card>
            </Row>
            <Row className='head-container'>
                <Container className='images'>
                    <Row className='head-container' style={{marginTop: '10px'}}>
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

