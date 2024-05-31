import Hero from '../../components/Hero/Hero'
// import Background from '../../components/Background/Background'
import Contact from '../../components/Contact/Contact'
import Projects from '../../components/Projects/Projects'
import Qualities from '../../components/Qualities/Qualities'
import Navigation from '../../components/Navigation/Navigation'
import './HomePage.css'
import { Col, Row } from 'react-bootstrap'

const HomePage = ({ language }) => {
    return (
        <>
            <section id="nav-section" role="region">
                <Navigation language={language} />
            </section>

            <section id="hero-section" role="region">
                <Hero language={language} />
            </section>

            <section id="projects-section" role="region" aria-label={language === 'ENG' ? 'Projects Section' : 'Sección de Proyectos'}>
                <Projects language={language} />
            </section>

            <section id="about-me-section">
                <Qualities language={language} />
                {/* <Background language={language} /> */}
            </section>

            <section id="contact-me-section" role="region" aria-label={language === 'ENG' ? 'Contact Me Section' : 'Sección de Contacto'}>
                <Contact language={language} />
            </section>
        </>
    )
}

export default HomePage
