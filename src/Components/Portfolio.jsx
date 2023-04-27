// import React, { useRef, useEffect } from 'react'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

import boldens from '../Media/project-boldens.jpg'
import boldensWebp from '../Media/project-boldens.webp'
import usc from '../Media/project-usc.jpg'
import uscWebp from '../Media/project-usc.webp'
import cunico from '../Media/project-cunico.jpg'
import cunicoWebp from '../Media/project-cunico.webp'
import firstatlantic from '../Media/project-firstatlantic.jpg'
import firstatlanticWebp from '../Media/project-firstatlantic.webp'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Portfolio() {
    // const portRef = useRef()
    // useEffect(() => {
    //     gsap.to('.card-1', {
    //         x: 100,
    //         duration: 2,
    //         ease: 'slow',
    //         scrollTrigger: {
    //             trigger: '.portfolio',
    //             markers: false,
    //             start: 'bottom bottom',
    //         },
    //     })
    //     gsap.to('.card-3', {
    //         x: 100,
    //         duration: 2,
    //         delay: 1,
    //         ease: 'slow',
    //         scrollTrigger: {
    //             trigger: '.portfolio',
    //             markers: false,
    //             start: 'bottom bottom',
    //         },
    //     })
    //     gsap.to('.card-2', {
    //         x: -100,
    //         duration: 2,
    //         ease: 'slow',
    //         delay: 2,
    //         scrollTrigger: {
    //             trigger: '.portfolio',
    //             markers: false,
    //             start: 'bottom bottom',
    //         },
    //     })
    //     gsap.to('.card-4', {
    //         x: -100,
    //         duration: 2,
    //         delay: 3,
    //         ease: 'slow',
    //         scrollTrigger: {
    //             trigger: '.portfolio',
    //             markers: false,
    //             start: 'bottom bottom',
    //         },
    //     })
    // }, [])
    return (
        <div className="portfolio">
            <Container id="portfolio" className="text-center color-white py-6">
                <p className="subtitle">some of my professional work</p>
                <h6 className="title mb-5">Portfolio</h6>
                <Row className="align-items-center">
                    <Col lg="6">
                        <Card className="my-4">
                            <a
                                href="https://www.boldens.com/"
                                target={'_blank'}
                                title=""
                                rel="noreferrer"
                            >
                                <picture>
                                    <source
                                        srcset={boldensWebp}
                                        type="image/webp"
                                    />
                                    <source
                                        srcset={boldens}
                                        type="image/jpeg"
                                    />
                                    <Card.Img
                                        title="Bolden's Web Design"
                                        alt="Screenshot of Boldens.com"
                                        height={300}
                                        width={600}
                                        src={boldensWebp}
                                        loading="lazy"
                                    />
                                </picture>
                            </a>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card className="my-4">
                            <a
                                href="https://www.cunicoelectric.com/"
                                target={'_blank'}
                                title=""
                                rel="noreferrer"
                            >
                                <picture>
                                    <source
                                        srcset={cunicoWebp}
                                        type="image/webp"
                                    />
                                    <source srcset={cunico} type="image/jpeg" />
                                    <Card.Img
                                        title="Cunico's Web Design"
                                        alt="Screenshot of cunico.com"
                                        height={300}
                                        width={600}
                                        src={cunicoWebp}
                                        loading="lazy"
                                    />
                                </picture>
                            </a>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card className="my-4">
                            <a
                                href="https://www.firstatlanticductcleaning.com/"
                                target={'_blank'}
                                title=""
                                rel="noreferrer"
                            >
                                <picture>
                                    <source
                                        srcset={firstatlanticWebp}
                                        type="image/webp"
                                    />
                                    <source
                                        srcset={firstatlantic}
                                        type="image/jpeg"
                                    />
                                    <Card.Img
                                        title="First Atlantic's Web Design"
                                        alt="Screenshot of firstatlantic.com"
                                        height={300}
                                        width={600}
                                        src={firstatlanticWebp}
                                        loading="lazy"
                                    />
                                </picture>
                            </a>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card className="my-4">
                            <a
                                href="https://www.uppersiouxcommunity-nsn.gov/"
                                target={'_blank'}
                                title=""
                                rel="noreferrer"
                            >
                                <picture>
                                    <source
                                        srcset={uscWebp}
                                        type="image/webp"
                                    />
                                    <source srcset={usc} type="image/jpeg" />
                                    <Card.Img
                                        title="USC's Web Design"
                                        alt="Screenshot of usc.com"
                                        height={300}
                                        width={600}
                                        src={uscWebp}
                                        loading="lazy"
                                    />
                                </picture>
                            </a>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio
