import { Col, Row, } from 'react-bootstrap'
import './Projects.css'

const Projects = ({ language }) => {

    return (
        <>
            <Row className='justify-content-center' role="region" aria-label={language === 'ENG' ? 'Projects Section' : 'Sección de Proyectos'}>
                <Col xs='12' lg='12' className='projects-card'>
                    <Row className='justify-content-center mt-2'>
                        <Col xs='12' lg='10' className=' text-center'>
                            <h3 role="heading" aria-level="1">
                                {language === 'ENG' ? 'My ' : 'Mis '}
                                <span>{language === 'ENG' ? 'Projects' : 'Proyectos'}</span>
                            </h3>
                        </Col>
                    </Row>
                    <Row className='justify-content-evenly mt-2 mb-4' role="list">
                        <Col xs='10' lg='5' className='projects-card-mini text-center mt-3' role="listitem">
                            <div className='git-icon' >
                                <h4>COMPI ROOMS</h4>
                                <a href='https://github.com/recheitor/Project-Compi-Client' target='_blank'><img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697055951/xbuhmypxuxhnni2itq3l.png" alt="GitHub Icon" role="img" aria-label="GitHub Profile" /></a>
                            </div>
                            <a href="https://compirooms.netlify.app/" target="_blank">
                                <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/t_mini3/czuemis1mfinxmuhgpbs.jpg" alt="COMPI ROOMS Project screenshot" role="img" aria-label="COMPI ROOMS Project Screenshot" loading="lazy" />
                            </a>
                            <h4>{language === 'ENG' ? 'Developed with:' : 'Desarrollado con:'}</h4>
                            <h5>ExpressJS - MongoDB</h5>
                            <h5>ReactJS - NodeJS</h5>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Projects