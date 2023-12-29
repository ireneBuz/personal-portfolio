import Hero from '../../components/Hero/Hero'
import Background from '../../components/Background/Background'
import Contact from '../../components/Contact/Contact'
import Projects from '../../components/Projects/Projects'
import Qualities from '../../components/Qualities/Qualities'
import './HomePage.css'
import { Col, Row } from 'react-bootstrap'


const HomePage = ({ language }) => {
    return (
        <>

            <Row>
                <Col xs='12' lg='12'>
                    <section role="main">
                        <Hero language={language} />
                    </section>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col xs='12' lg='10' >
                    <section id="about-me-section">
                        <Qualities language={language} />
                        <Background language={language} />
                    </section>
                </Col>
            </Row>
            <Row>
                <Col xs='12' lg='12'>
                    <section id="projects-section" role="region" aria-label={language === 'ENG' ? 'Projects Section' : 'Sección de Proyectos'}>
                        <Projects language={language} />
                    </section>
                </Col>
            </Row>
            <Row>
                <Col xs='12' lg='12'>
                    <section id="contact-me-section" role="region" aria-label={language === 'ENG' ? 'Contact Me Section' : 'Sección de Contacto'}>
                        <Contact language={language} />
                    </section>
                </Col>
            </Row>
        </>
    )
}

export default HomePage