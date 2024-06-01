import React from 'react';
import './Projects.css';

const Project = ({ title, description, githubLink, projectLink, screenshot, technologies }) => {
    return (
        <div className='project'>
            <div className='project-img'>
                <img src={screenshot} alt={`${title} Project screenshot`} />
                <div className='project-info'>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <div className='technologies'>
                        {technologies.map((tech, index) => (
                            <span key={index} className='tech-button'>{tech}</span>
                        ))}
                    </div>
                    <div className='links'>
                        <a href={githubLink} target='_blank' rel='noopener noreferrer'>
                            <button className='link-button'>GitHub</button>
                        </a>
                        <a href={projectLink} target='_blank' rel='noopener noreferrer'>
                            <button className='link-button'>Demo</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = ({ language }) => {
    const projectsData = [
        {
            title: language === 'ENG' ? 'Creatives Q+' : 'Creativos Q+',
            description: 'A project for Creatives Q+.',
            githubLink: 'https://github.com/ireneBuz/Q-support-client',
            projectLink: 'https://creativesqplus.netlify.app/',
            screenshot: '/images/creatives-screen.png',
            technologies: ['React', 'HTML', 'CSS']
        },
        {
            title: 'Kind of Snake',
            description: 'A project about a kind of snake.',
            githubLink: 'https://github.com/ireneBuz/ironhack-project01',
            projectLink: 'https://isabellanpaiva.github.io/kind-of-snake/',
            screenshot: '/images/kind-of-snake.png',
            technologies: ['JavaScript', 'HTML', 'CSS']
        },
    ];

    return (
        <div className='projects-section' role="region" aria-label={language === 'ENG' ? 'Projects Section' : 'Sección de Proyectos'}>
            <h3 className='projects-title'>
                {language === 'ENG' ? (
                    <>
                        <span className='my'>My</span> <span className='projects'>Projects</span><span className='hover-info'>hover to get more info</span>
                    </>
                ) : (
                    <>
                        <span className='my'>Mis</span> <span className='projects'>Proyectos</span>
                    </>
                )}
            </h3>            <div className='projects-grid'>
                {projectsData.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
