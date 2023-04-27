import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import portrait from '../Media/portrait.jpg'
import portraitwebp from '../Media/portrait.webp'

function Home() {
    return (
        <Container
            id="home"
            className="overlay text-center color-white padding-home"
        >
            <Row>
                <p className="subtitle">hello, my name is...</p>
                <h1 className="title">Brett Shearrer</h1>
            </Row>
            <picture>
                <source srcset={portraitwebp} type="image/webp" />
                <source srcset={portrait} type="image/jpeg" />
                <LazyLoadImage
                    className="img-fluid"
                    id="proPic"
                    src={portraitwebp}
                    title="Photo of Brett"
                    alt="Photo of Brett"
                    height={400}
                    width={600}
                    loading="lazy"
                ></LazyLoadImage>
            </picture>
            <div className="social">
                <h2>Connect</h2>

                <div className="social-icons">
                    <i class="bi bi-arrow-down"></i>
                </div>
                <div className="social-icons">
                    <a
                        href="https://www.linkedin.com/in/brett-shearrer-566512184/"
                        target="_blank"
                        rel="noreferrer"
                        title="Visit Brett's LinkedIn Profile"
                    >
                        <i class="bi bi-linkedin"></i>
                    </a>
                </div>
                <div className="social-icons">
                    <a
                        href="https://github.com/UnluckyBuck/"
                        target="_blank"
                        rel="noreferrer"
                        title="Visit Brett's Github Profile"
                    >
                        <i class="bi bi-github"></i>
                    </a>
                </div>
            </div>
        </Container>
    )
}

export default Home
