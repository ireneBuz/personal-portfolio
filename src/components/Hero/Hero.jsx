import { Col, Row } from 'react-bootstrap';
import './Hero.css';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ language }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <>
            <div className='hero-background'>
                <Row className={`hero justify-content-center align-items-center ${loaded ? 'fade-in' : ''}`} role="banner" aria-label={language === 'ENG' ? 'Hero Section' : 'Sección del héroe'}>
                    <Col xs='8' lg='6' className='d-flex flex-column align-items-start text-start'>
                        <h1 role="heading" aria-level="1">
                            <span className='ex'>{language === 'ENG' ? 'Hello! ' : 'Hola!m'}</span>
                            {language === 'ENG' ? 'My name is ' : 'Mi nombre es '}
                            <span className="highlight">Irene</span>
                        </h1>
                        <div>
                            <h2 role="heading" aria-level="2">
                                {language === 'ENG' ? "I'm a " : "Soy "}
                                <span className="highlight">{language === 'ENG' ? "Web Developer" : "Desarrolladora Web"}</span>
                                {language === 'ENG' ? " dedicated to creating" : " dedicada a crear"}
                            </h2>
                        </div>
                        <h2 role="heading" aria-level="3">
                            <span className="highlight">{language === 'ENG' ? "user-friendly" : "proyectos accesibles"}</span>
                            {language === 'ENG' ? " and " : " y "}
                            <span className="highlight">{language === 'ENG' ? "accessible projects" : "útiles"}</span>
                            {language === 'ENG' ? "." : "."}
                        </h2>
                        <h3 role="heading" aria-level="3">
                            {language === 'ENG' ? "With a background in " : "Con un background en "}
                            <span className="highlight">{language === 'ENG' ? "musical pedagogy" : "pedagogía musical"}</span>
                            {language === 'ENG' ? ", I apply creativity and a unique perspective to my work." : " que aplico en mis proyectos."}
                        </h3>


                    </Col>

                    <Col xs='4' lg='4' className='ps-0'>
                        <img className="img" src="/images/perfil.webp" alt="Irene Buceta's Photo" role="img" aria-label="Irene Buceta's Photo" />
                    </Col>
                </Row>
                <motion.div
                    className="scroll-arrow"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    &#x25BC;
                </motion.div>
            </div>
        </>
    )
}

export default Hero;
