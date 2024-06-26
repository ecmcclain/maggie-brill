import '../styles/Cinematography.css'

import {Container, Row, Col} from 'react-bootstrap';

import {dirProjects} from './DirProjects';
import ProjectCard from "./ProjectCard";

import React, {useRef, useState} from "react";
import { ArrowRight } from 'react-bootstrap-icons';
import { ArrowLeft } from 'react-bootstrap-icons';

const Directing = () => {
    const sliderRef = useRef(null);
    const scrollAmount = 360; // The amount to scroll when clicking the navigation buttons

    return (
        <section id="directing" className="fixed-bottom" style={{display: 'flex', marginBottom: '40px'}}>
            <button
                className="nav-btn"
                onClick={() => {
                const container = sliderRef.current;
                container.scrollLeft -= scrollAmount; 
                }}
            > <ArrowLeft />
            </button>
            <Container fluid className='cin' ref={sliderRef}>
                    {dirProjects.map((DirProject) => {
                        return (
                        <ProjectCard
                        project={DirProject}
                            />
                        );
                    })}
            </Container>
                    <button
                className="nav-btn"
                onClick={() => {
                const container = sliderRef.current;
                container.scrollLeft += scrollAmount;
                }}
            > <ArrowRight />
            </button>
        </section>
    )
}

export default Directing



