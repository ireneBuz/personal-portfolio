import { Col, Row, } from 'react-bootstrap'
import './Hero.css'
import { useEffect, useState } from 'react';
const Hero = ({ language }) => {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);



    }, []);

    return (
        <>
            <div className='hero-background'>
                <Row className={`hero justify-content-center align-items-center ${loaded ? 'fade-in' : ''}`} role="banner" aria-label={language === 'ENG' ? 'Hero Section' : 'Sección del héroe'}>
                    <div xs='8' lg='7' className='d-flex flex-column align-items-center text-center'>
                        <h1 role="heading" aria-level="1">
                            {language === 'ENG' ? 'Hello!' : '¡Hola!'}
                        </h1>
                        <div>
                            <h3 role="heading" aria-level="2">
                                {language === 'ENG' ? 'I am Irene Buceta' : 'Soy Irene Buceta'}
                            </h3>
                        </div>
                        <h4 role="heading" aria-level="3">
                            {language === 'ENG' ? "I'm a Full Stack Web Developer" : "Soy Desarrolladora Web Full Stack"}
                        </h4>
                    </div>
                    <Col xs='4' lg='5' className='ps-0'>
                        {/* <img src="/images/fotopeque2.png" alt="Irene Buceta's Photo" role="img" aria-label="Alejandro Reche's Photo" /> */}
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Hero