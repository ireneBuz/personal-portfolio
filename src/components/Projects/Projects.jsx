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
                                <h4>Creatives Q+</h4>
                                <a href='https://github.com/ireneBuz/Q-support-client' target='_blank'><img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697055951/xbuhmypxuxhnni2itq3l.png" alt="GitHub Icon" role="img" aria-label="GitHub Profile" /></a>
                            </div>
                            <a href="https://creativesqplus.netlify.app/" target="_blank">
                                <img src="public/images/creatives-screen.png" alt="Creatives Q+ Project screenshot" role="img" aria-label="Creactives Q+ Project Screenshot" loading="lazy" />
                            </a>
                            <h4>{language === 'ENG' ? 'Developed with:' : 'Desarrollado con:'}</h4>
                            <h5>ExpressJS - MongoDB</h5>
                            <h5>ReactJS - NodeJS</h5>
                        </Col>

                        <Col xs='10' lg='5' className='projects-card-mini text-center mt-3' role="listitem">
                            <div className='git-icon' >
                                <h4>Kind of Snake</h4>
                                <a href='https://github.com/ireneBuz/ironhack-project01' target='_blank'><img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697055951/xbuhmypxuxhnni2itq3l.png" alt="GitHub Icon" role="img" aria-label="GitHub Profile" /></a>
                            </div>
                            <a href="https://isabellanpaiva.github.io/kind-of-snake/" target="_blank">
                                <img src="/images/kind-of-snake.png" alt="kind of snake screenshot" role="img" aria-label="kind of snake Project Screenshot" loading="lazy" />
                            </a>
                            <h4>{language === 'ENG' ? 'Developed with:' : 'Desarrollado con:'}</h4>
                            <h5>ExpressJS - MongoDB</h5>
                            <h5>ReactJS - NodeJS</h5>
                        </Col>

                        <Col xs='10' lg='5' className='projects-card-mini text-center mt-3' role="listitem">
                            <div className='git-icon' >
                                <h4>Creatives Q+</h4>
                                <a href='https://github.com/ireneBuz/Q-support-client' target='_blank'><img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697055951/xbuhmypxuxhnni2itq3l.png" alt="GitHub Icon" role="img" aria-label="GitHub Profile" /></a>
                            </div>
                            <a href="https://creativesqplus.netlify.app/" target="_blank">
                                <img src="public/images/creatives-screen.png" alt="Creatives Q+ Project screenshot" role="img" aria-label="Creactives Q+ Project Screenshot" loading="lazy" />
                            </a>
                            <h4>{language === 'ENG' ? 'Developed with:' : 'Desarrollado con:'}</h4>
                            <h5>ExpressJS - MongoDB</h5>
                            <h5>ReactJS - NodeJS</h5>
                        </Col>
                        <Col xs='10' lg='5' className='projects-card-mini text-center mt-3' role="listitem">
                            <div className='git-icon' >
                                <h4>Creatives Q+</h4>
                                <a href='https://github.com/ireneBuz/Q-support-client' target='_blank'><img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697055951/xbuhmypxuxhnni2itq3l.png" alt="GitHub Icon" role="img" aria-label="GitHub Profile" /></a>
                            </div>
                            <a href="https://creativesqplus.netlify.app/" target="_blank">
                                <img src="public/images/creatives-screen.png" alt="Creatives Q+ Project screenshot" role="img" aria-label="Creactives Q+ Project Screenshot" loading="lazy" />
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