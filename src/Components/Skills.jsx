// import React, { useRef, useEffect } from 'react'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Skills() {
    // const skillRef = useRef()
    // useEffect(() => {
    //     gsap.to('.front-end', {
    //         x: 100,
    //         duration: 2,
    //         ease: 'slow',
    //         scrollTrigger: {
    //             trigger: '.skill-section',
    //             markers: false,
    //             start: 'bottom bottom',
    //         },
    //     })
    //     gsap.to('.back-end', {
    //         x: 100,
    //         duration: 2,
    //         delay: 2,
    //         ease: 'slow',
    //         scrollTrigger: {
    //             trigger: '.skill-section',
    //             markers: false,
    //             start: 'bottom bottom',
    //         },
    //     })
    //     gsap.to('.skill-list-front', {
    //         x: -100,
    //         duration: 2,
    //         delay: 1,
    //         ease: 'slow',
    //         scrollTrigger: {
    //             trigger: '.skill-section',
    //             markers: false,
    //             start: 'bottom bottom',
    //         },
    //     })
    //     gsap.to('.skill-list-back', {
    //         x: -100,
    //         duration: 2,
    //         delay: 3,
    //         ease: 'slow',
    //         scrollTrigger: {
    //             trigger: '.skill-section',
    //             markers: false,
    //             start: 'bottom bottom',
    //         },
    //     })
    // }, [])
    return (
        <Container id="skills" className="skill-section color-white py-6">
            <Row className="text-center pb-4">
                <p className="subtitle">my current knowledge & skills</p>
                <h4 className="title">Skills</h4>
            </Row>

            <Row className="align-items-center justify-content-between my-4">
                <Col lg="5">
                    <h5>
                        <i class="d-inline bi bi-display me-3"></i>Front-End
                        Developement
                    </h5>
                    <p>
                        Through my understanding of Color theory, I can create a
                        long lasting user experience by incorporating colors and
                        design styles to catch the eye of the user.
                    </p>
                </Col>
                <Col className="text-center" lg="7">
                    <span className="skill">HTML5</span>
                    <span className="skill">CSS3</span>
                    <span className="skill">SASS</span>
                    <span className="skill">JavaScript</span>
                    <span className="skill">React.js</span>
                    <span className="skill">Bootstrap</span>
                    <span className="skill">GSAP</span>
                    <span className="skill">Wordpress</span>
                    <span className="skill">SquareSpace</span>
                    <span className="skill">CMS</span>
                    <span className="skill">Lightroom</span>
                    <span className="skill">Photoshop</span>
                    <span className="skill">Illistrator</span>
                    <span className="skill">Procreate</span>
                    <span className="skill">Google Drive</span>
                    <span className="skill">Microsoft 365</span>
                </Col>
            </Row>
            <Row className="align-items-center justify-content-between my-4">
                <Col lg="5">
                    <h5>
                        <i class="bi bi-code-slash me-3"></i>Back-End
                        Developement
                    </h5>
                    <p>
                        Utilizing Bootstrap and SEO Principles, I create
                        high-performance websites developed for responsiveness
                        and efficiency.
                    </p>
                </Col>
                <Col className="text-center" lg="7">
                    <span className="skill">SEO Principles</span>
                    <span className="skill">MS SQL</span>
                    <span className="skill">NPM</span>
                    <span className="skill">cPanel</span>
                    <span className="skill">ColdFusion</span>
                    <span className="skill">Github</span>
                    <span className="skill">REST API</span>
                    <span className="skill">Node.js</span>
                </Col>
            </Row>
        </Container>
    )
}

export default Skills
