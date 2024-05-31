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
                        {language === 'ENG' ? (
                            <h1 role="heading" aria-level="1">
                                <span className='ex'>Hello!</span> My name is <span className="highlight">Irene</span>
                            </h1>
                        ) : (
                            <h1 role="heading" aria-level="1">
                                <span className='ex'>Hola!</span> Mi nombre es <span className="highlight">Irene</span>
                            </h1>
                        )}
                        <div>
                            <h2 role="heading" aria-level="2">
                                {language === 'ENG' ? "I'm a " : "Soy "} <span className="highlight">{language === 'ENG' ? "Web Developer" : "Desarrolladora Web"}</span>
                            </h2>
                        </div>
                        <h3 role="heading" aria-level="3">
                            {language === 'ENG' ? "with " : "con experiencia en "}
                            <span className="highlight">{language === 'ENG' ? "Music Educational" : "Educación Musical"}</span>
                            {language === 'ENG' ? " experience" : ""}
                        </h3>
                    </Col>

                    <Col xs='4' lg='4' className='ps-0'>
                        <img className="img" src="/images/perfil.webp" alt="Irene Buceta's Photo" role="img" aria-label="Irene Buceta's Photo" />
                    </Col>

                </Row>
                <div className="scroll-down">
                    <span className="arrow"></span>
                </div>
            </div>
        </>
    )
}

export default Hero;
