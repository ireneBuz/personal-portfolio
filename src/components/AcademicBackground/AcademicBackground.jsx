import React, { useState } from 'react';
import './AcademicBackground.css';

const AcademicBackground = () => {
    const [computerExpanded, setComputerExpanded] = useState(false);
    const [musicExpanded, setMusicExpanded] = useState(false);
    const [workExpanded, setWorkExpanded] = useState(false);

    return (
        <div className="academic-background-container">
            <h2 className='background-title'>
                <span className="big-letter">A</span>cademic Background
            </h2>
            <div className="photos-container">
                <div className="photo">
                    <img src="/images/tec-background.png" alt="Computer" />
                    <div className="expand-button" onClick={() => setComputerExpanded(!computerExpanded)}>
                        {computerExpanded ? 'Hide' : 'Show'} Academic Background
                    </div>
                    {computerExpanded && (
                        <>
                            <div className="academic-info">
                                <h3>Web Development Full-Stack</h3>
                                <p>HTML | CSS | JS Vanilla | NodeJs | ExpressJS |MongoDb |
                                    ReactJS | (TDD)</p>
                                <p>IRONHACK (Madrid, 07/2023-09/2023)</p>
                            </div>
                            <div className="academic-info">
                                <h3>User Experience (UX) Design</h3>
                                <p>Google</p>
                            </div>
                            <div className="academic-info">
                                <h3>Agile Proyect Management | Scrum</h3>
                                <p>Google</p>
                            </div>
                        </>
                    )}
                </div>
                <div className="photo">
                    <img src="/images/music-background.png" alt="Piano" />
                    <div className="expand-button" onClick={() => setMusicExpanded(!musicExpanded)}>
                        {musicExpanded ? 'Hide' : 'Show'} Academic Background
                    </div>
                    {musicExpanded && (
                        <>
                            <div className="academic-info">
                                <h3>Higher degree of Music in Pedagogy of Language and
                                    Music Education</h3>
                                <p>Royal Conservatory of Music (Madrid, 2010)</p>
                            </div>
                            <div className="academic-info">
                                <h3>University master ́s degree in Teacher Training</h3>
                                <p>Specialization in music</p>
                                <p>UAM (Madrid, 2017)</p>
                            </div>
                        </>
                    )}
                </div>
                <div className="photo">
                    <img src="/images/work-experience.png" alt="Work" />
                    <div className="expand-button" onClick={() => setWorkExpanded(!workExpanded)}>
                        {workExpanded ? 'Hide' : 'Show'} Work Experience
                    </div>
                    {workExpanded && (
                        <>
                            <div className="academic-info">
                                <h3>Posición 1</h3>
                                <p>Descripción de la posición 1.</p>
                                <p>Año de trabajo: 20XX - 20XX</p>
                            </div>
                            <div className="academic-info">
                                <h3>Posición 2</h3>
                                <p>Descripción de la posición 2.</p>
                                <p>Año de trabajo: 20XX - 20XX</p>
                            </div>
                            <div className="academic-info">
                                <h3>Posición 3</h3>
                                <p>Descripción de la posición 3.</p>
                                <p>Año de trabajo: 20XX - 20XX</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AcademicBackground;
