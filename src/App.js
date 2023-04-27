import './App.css'
import './Styling/Styling.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect, useState } from 'react'

import Menu from './Menu/Menu'
import React from 'react'
import Home from './Components/Home'

import Skills from './Components/Skills'
import Portfolio from './Components/Portfolio'
import { Link } from 'react-scroll'
import Footer from './Components/Footer'
import About from './Components/About'

function App() {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        })
    }, [])
    return (
        <React.Fragment>
            <Menu />
            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Footer />

            {showButton && (
                <Link
                    className="back-to-top"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <i class="bi bi-arrow-90deg-up"></i>
                </Link>
            )}
        </React.Fragment>
    )
}

export default App
