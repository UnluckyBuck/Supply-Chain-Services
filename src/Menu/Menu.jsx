import React from 'react'
import '../Menu/Menu.css'
import '../Styling/Styling.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-scroll'

function Menu() {
    return (
        <React.Fragment>
            <Navbar className="fluid fixed-top mb-4" expand="lg">
                <Container className="justify-content-end">
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className="mx-auto"
                            activeKey="/home"
                            onSelect={(selectedKey) =>
                                alert(`selected ${selectedKey}`)
                            }
                        >
                            <Nav.Link>
                                <Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    data-toggle="collapse"
                                    data-target=".navbar-collapse"
                                >
                                    Home
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    data-toggle="collapse"
                                    data-target=".navbar-collapse"
                                >
                                    About
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Skills
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Portfolio
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default Menu
