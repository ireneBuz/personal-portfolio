import { Col, Container, Navbar, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Qualities.css'


const Qualities = ({ language }) => {


    return (
        <>
            <Row className='background-blur' role="region" aria-label={language === 'ENG' ? 'Qualities Section' : 'Sección de Cualidades'}>
                <Col xs='12' lg='12'>
                    <Row className='qualities-title justify-content-center'>
                        <Col xs='12' lg='12' className='qualities-title-bottom text-center'>
                            <h2 role="heading" aria-level="1">
                                {language === 'ENG' ? 'This are my top ' : 'Estas son mis mejores '}
                                <span>{language === 'ENG' ? 'qualities' : 'cualidades'}</span>
                            </h2>
                        </Col>
                    </Row>

                    <Row className='qualities justify-content-evenly' role="list">
                        <Col xs='5' md='5' lg='3' className='qualities-card text-center' role="listitem">
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/zok1mfwdyrudnmmwmk08" alt="Teamwork Icon" role="img" aria-label={language === 'ENG' ? 'Teamwork' : 'Trabajo en equipo'} />
                            <p>{language === 'ENG' ? 'Teamwork' : 'Trabajo en equipo'}</p>
                        </Col>

                        <Col xs='5' md='5' lg='3' className='qualities-card text-center' role="listitem">
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/n2rrjxqyxe9j4imgzrn2" alt="Problem-solving Icon" role="img" aria-label={language === 'ENG' ? 'Problem-solving' : 'Resolución de problemas'} />
                            <p>{language === 'ENG' ? 'Problem-solving' : 'Resolución de problemas'}</p>
                        </Col>
                        <Col xs='5' md='5' lg='3' className='qualities-card text-center' role="listitem">
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/auyikyqsqrcbm1efla3c" alt="Time Management Icon" role="img" aria-label={language === 'ENG' ? 'Time Management' : 'Gestión del tiempo'} />
                            <p>{language === 'ENG' ? 'Time Management' : 'Gestión del tiempo'}</p>
                        </Col>
                        <Col xs='5' md='5' lg='3' className='qualities-card text-center' role="listitem">
                            <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/pd9kyv0o3jxqe9bo9bnm" alt="Communication Skills Icon" role="img" aria-label={language === 'ENG' ? 'Communication Skills' : 'Buena comunicación'} />
                            <p>{language === 'ENG' ? 'Communication Skills' : 'Buena comunicación'}</p>
                        </Col>
                    </Row>
                </Col >
            </Row >
        </>
    )
}

export default Qualities