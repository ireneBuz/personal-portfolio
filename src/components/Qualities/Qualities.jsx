import { Col, Container, Navbar, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Qualities.css'
// import './Animaciones.css'


const Qualities = ({ language }) => {


    return (
        <>
            <Row className='background-blur' role="region" aria-label={language === 'ENG' ? 'Qualities Section' : 'Sección de Cualidades'}>
                <Col xs='12' lg='12'>
                    <Row className='qualities-title justify-content-center'>
                        <Col xs='12' lg='12' className='tracking-in-expand-fwd'>
                            <h2 role="heading" aria-level="1">
                                {language === 'ENG' ? 'Soft skills ' : 'Mis habilidades '}
                                {/* <span>{language === 'ENG' ? 'qualities' : 'cualidades'}</span> */}
                            </h2>
                        </Col>
                    </Row>

                    <Row className='qualities justify-content-evenly' role="list">
                        <Col xs='5' md='5' lg='3' className='qualities-card text-center' role="listitem">
                            <img src="/images/arrows-random.svg" alt="Teamwork Icon" role="img" aria-label={language === 'ENG' ? 'Teamwork' : 'Trabajo en equipo'} />
                            <p>{language === 'ENG' ? 'Teamwork' : 'Trabajo en equipo'}</p>
                        </Col>
                        <Col xs='5' md='5' lg='3' className='qualities-card text-center' role="listitem">
                            <img src="/images/switch-horizontal.svg" alt="Teamwork Icon" role="img" aria-label={language === 'ENG' ? 'Teamwork' : 'Trabajo en equipo'} />
                            <p>{language === 'ENG' ? 'Comunication' : 'Comunicación'}</p>
                        </Col>
                        <Col xs='5' md='5' lg='3' className='qualities-card text-center' role="listitem">
                            <img src="/images/alarm.svg" alt="Teamwork Icon" role="img" aria-label={language === 'ENG' ? 'Teamwork' : 'Trabajo en equipo'} />
                            <p>{language === 'ENG' ? 'Time Management' : 'Gestión del tiempo'}</p>
                        </Col>
                        <Col xs='5' md='5' lg='3' className='qualities-card text-center' role="listitem">
                            <img src="/images/bulb (1).svg" alt="Teamwork Icon" role="img" aria-label={language === 'ENG' ? 'Teamwork' : 'Trabajo en equipo'} />
                            <p>{language === 'ENG' ? 'Creativity' : 'Creatividad'}</p>
                        </Col>


                    </Row>
                </Col >
            </Row >
        </>
    )
}

export default Qualities