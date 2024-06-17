import '../styles/Cinematography.css'

import {Container, Row, Col} from 'react-bootstrap';

import {cinProjects} from './CinProjects';
import ProjectCard from "./ProjectCard";
import React, {useRef, useState} from "react";
import { CaretRightFill } from 'react-bootstrap-icons';
import { CaretLeftFill } from 'react-bootstrap-icons';


const Cinematography = () => {
    const sliderRef = useRef(null);
    const scrollAmount = 360; // The amount to scroll when clicking the navigation buttons

    return (
        <section id="cinematography" className="fixed-bottom">
            <button
                className="nav-btn"
                onClick={() => {
                const container = sliderRef.current;
                container.scrollLeft -= scrollAmount; 
                }}
            > <CaretLeftFill />
            </button>
            <Container fluid className='cin' ref={sliderRef}>
                    {cinProjects.map((CinProject) => {
                        return (
                        <ProjectCard
                        project={CinProject}
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
            > <CaretRightFill />
            </button>
            
        </section>
        
    )
}

export default Cinematography



