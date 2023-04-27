import React, { useRef, useEffect } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import elkMale from '../Media/elk-male.png'
import elkMaleWebp from '../Media/elk-male.webp'
import elkFemale from '../Media/elk-female.png'
import elkFemaleWebp from '../Media/elk-female.webp'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function About() {
    const aboutRef = useRef()
    useEffect(() => {
        gsap.to('.elk-male', {
            x: 180,
            duration: 2,
            ease: 'slow',
            scrollTrigger: {
                trigger: '.about',
                markers: false,
                start: 'bottom bottom',
            },
        })
        gsap.to('.elk-female', {
            x: -180,
            duration: 2,
            delay: 2,
            ease: 'slow',
            scrollTrigger: {
                trigger: '.about',
                markers: false,
                start: 'bottom bottom',
            },
        })
    }, [])

    return (
        <Container ref={aboutRef} id="about" className="about color-white py-6">
            <Row className="align-items-end">
                <Col className="elk-male" lg={3}>
                    <picture>
                        <source srcset={elkMaleWebp} type="image/webp" />
                        <source srcset={elkMale} type="image/jpeg" />
                        <LazyLoadImage
                            className="img-fluid elk"
                            src={elkMaleWebp}
                            title="Male Elk Calling"
                            alt="Male Elk Calling"
                            height={300}
                            width={312}
                            loading="lazy"
                        ></LazyLoadImage>
                    </picture>
                </Col>
                <Col lg={6} className="px-5">
                    <p className="subtitle">let me introduce myself</p>
                    <h3 className="title">About Me</h3>
                    <p>
                        Highly organized and detail-oriented self-taught
                        Software Developer seeking a position as a React.js
                        Developer. With a passion for learning, along with never
                        ending creativity, I strive towards eye catching
                        responsive/efficient web design. Having a background in
                        Color Theory and home design, allows me to create a
                        relaxing and longer lasting user experience.
                    </p>
                </Col>
                <Col className="elk-female" lg={3}>
                    <picture>
                        <source srcset={elkFemaleWebp} type="image/webp" />
                        <source srcset={elkFemale} type="image/jpeg" />
                        <LazyLoadImage
                            className="img-fluid elk"
                            src={elkFemaleWebp}
                            title="Female ELk"
                            alt="Female ELk"
                            height={300}
                            width={400}
                            loading="lazy"
                        ></LazyLoadImage>
                    </picture>
                </Col>
            </Row>
        </Container>
    )
}

export default About
