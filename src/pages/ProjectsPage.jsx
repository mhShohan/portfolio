import { Container } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import SingleProject from '../components/SingleProject';
import { projects } from '../data';

export default function ProjectsPage() {
    const frontEndProject = projects.filter((p) => p.appType === 'frontend');
    const mernProject = projects.filter((p) => p.appType === 'mern-stack');
    const psdToHTMLProject = projects.filter((p) => p.appType === 'psdToHTML');
    console.log(psdToHTMLProject);
    return (
        <ProjectsPageContainer>
            <Container>
                {mernProject.length > 0 && (
                    <>
                        <Fade bottom>
                            <Heading>MERN Stack Web APP</Heading>
                        </Fade>
                        <ProjectWrapper>
                            {mernProject.map((project) => (
                                <SingleProject
                                    project={project}
                                    key={project.id}
                                />
                            ))}
                        </ProjectWrapper>
                        <br />
                        <br />
                        <br />
                    </>
                )}
                {frontEndProject.length > 0 && (
                    <>
                        <Fade bottom>
                            <Heading>Front-End Projects (react)</Heading>
                        </Fade>
                        <ProjectWrapper>
                            {frontEndProject.map((project) => (
                                <SingleProject
                                    project={project}
                                    key={project.id}
                                />
                            ))}
                        </ProjectWrapper>
                        <br />
                        <br />
                        <br />
                    </>
                )}

                {psdToHTMLProject.length > 0 && (
                    <>
                        <Fade bottom>
                            <Heading>PSD to HTML</Heading>
                        </Fade>
                        <ProjectWrapper>
                            {psdToHTMLProject.map((project) => (
                                <SingleProject
                                    project={project}
                                    key={project.id}
                                />
                            ))}
                        </ProjectWrapper>
                    </>
                )}
            </Container>
        </ProjectsPageContainer>
    );
}

const ProjectsPageContainer = styled.div`
    padding: 0 0 110px 0;
`;

const Heading = styled.h1`
    font-size: 3rem;
    font-family: 'Kurale', serif;
    text-align: center;
    text-transform: uppercase;
    position: relative;

    &::before {
        content: '';
        display: block;
        width: 80px;
        height: 7px;
        background: rgba(0, 0, 0, 0.65);
        position: absolute;
        left: calc(50% - 40px);
        bottom: 0;
    }

    &::after {
        content: '';
        display: block;
        width: 300px;
        height: 3px;
        background: rgba(0, 0, 0, 0.6);
        position: absolute;
        left: calc(50% - 150px);
        bottom: 2px;
        -webkit-transform: skew(45deg);
        transform: skew(45deg);
    }

    @media (max-width: 1100px) {
        font-size: 4rem;
    }
    @media (max-width: 900px) {
        font-size: 3.6rem;
    }
    @media (max-width: 600px) {
        font-size: 3rem;
    }
    @media (max-width: 500px) {
        font-size: 2.2rem;
    }
`;

const ProjectWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;
