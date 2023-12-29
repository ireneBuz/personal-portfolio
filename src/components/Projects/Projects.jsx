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
                        <Col xs='10' lg='5' className='projects-card-mini text-center mt-3' role="listitem">
                            <div className='git-icon' >
                                <h4>PIANO LESSONS MADRID</h4>
                                <a href='https://github.com/recheitor/piano-lessons' target='_blank'><img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697055951/xbuhmypxuxhnni2itq3l.png" alt="GitHub Icon" role="img" aria-label="GitHub Profile" /></a>
                            </div>
                            <a href="https://pianolessonsmadrid.com" target="_blank">
                                <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/cx2khtovhcdsdmcbcns8" alt="PIANO LESSONS MADRID Project screenshot" role="img" aria-label="PIANO LESSONS MADRID Project Screenshot" loading="lazy" />
                            </a>
                            <h4>{language === 'ENG' ? 'Developed with:' : 'Desarrollado con:'}</h4>
                            <h5>VueJS - NuxtJS</h5>
                        </Col>
                        <Col xs='10' lg='5' className='projects-card-mini text-center mt-3' role="listitem">
                            <div className='git-icon' >
                                <h4>INSTRUSTERIL</h4>
                                <a href='https://github.com/recheitor/InstruSteril-Project' target='_blank'><img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697055951/xbuhmypxuxhnni2itq3l.png" alt="GitHub Icon" role="img" aria-label="GitHub Profile" /></a>
                            </div>
                            <a href="https://instrusteril.es" target="_blank">
                                <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/kjx5i1i6bk8jd8ro9og0" alt="INSTRUSTERIL Project screenshot" role="img" aria-label="INSTRUSTERIL Project Screenshot" loading="lazy" />
                            </a>
                            <h4>{language === 'ENG' ? 'Developed with:' : 'Desarrollado con:'}</h4>
                            <h5>ReactJS - Bootstrap</h5>
                        </Col>
                        <Col xs='10' lg='5' className='projects-card-mini text-center mt-3 happycode-container' role="listitem">
                            <div className='git-icon' >
                                <h4>HAPPYCODE</h4>
                                <a href='https://github.com/recheitor/HappyCode-Landing-client' target='_blank'><img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697055951/xbuhmypxuxhnni2itq3l.png" alt="GitHub Icon" role="img" aria-label="GitHub Profile" /></a>
                            </div>
                            <a href="https://happycodev.com" target="_blank">
                                <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/f_auto,q_auto/syptbzlmriyzea0osmad" alt="HAPPYCODE Project screenshot" role="img" aria-label="HAPPYCODE Project Screenshot" loading="lazy" />
                            </a>
                            <h4>{language === 'ENG' ? 'Developed with:' : 'Desarrollado con:'}</h4>
                            <h5>ReactJS - SASS</h5>
                        </Col>
                        <Col xs='10' lg='5' className='projects-card-mini text-center mt-3' role="listitem">
                            <div className='git-icon' >
                                <h4>ONLY PIZZAS</h4>
                                <a href='https://github.com/recheitor/M2Project' target='_blank'><img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697055951/xbuhmypxuxhnni2itq3l.png" alt="GitHub Icon" role="img" aria-label="GitHub Profile" /></a>
                            </div>
                            <a href="https://onlypizzas.fly.dev/" target="_blank">
                                <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/t_mini5/uiriutfupwqjhlgwejf7.jpg" alt="ONLY PIZZAS Project screenshot" role="img" aria-label="ONLY PIZZAS Project Screenshot" loading="lazy" />
                            </a>
                            <h4>{language === 'ENG' ? 'Developed with:' : 'Desarrollado con:'}</h4>
                            <h5>ExpressJS - MongoDB</h5>
                            <h5>NodeJS - Bootstrap</h5>
                        </Col>
                        <Col xs='10' lg='5' className='projects-card-mini text-center mt-3' role="listitem">
                            <div className='git-icon' >
                                <h4>JUMPER TRAVELER</h4>
                                <a href='https://github.com/recheitor/M1Project' target='_blank'><img src="https://res.cloudinary.com/dbtmrinwa/image/upload/v1697055951/xbuhmypxuxhnni2itq3l.png" alt="GitHub Icon" role="img" aria-label="GitHub Profile" /></a>
                            </div>
                            <a href="https://recheitor.github.io/M1Project/" target="_blank">
                                <img src="https://res.cloudinary.com/dbtmrinwa/image/upload/t_mini6/otd2rhxmrgor55qrmtyg.jpg" alt="JUMPER TRAVELER Project screenshot" role="img" aria-label="JUMPER TRAVELER Project Screenshot" loading="lazy" />
                            </a>
                            <h4>{language === 'ENG' ? 'Developed with:' : 'Desarrollado con:'}</h4>
                            <h5>NodeJS - Bootstrap</h5>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Projects