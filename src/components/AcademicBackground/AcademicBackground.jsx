import React, { useState } from 'react';
import './AcademicBackground.css';

const AcademicBackground = () => {
    const [computerExpanded, setComputerExpanded] = useState(false);
    const [musicExpanded, setMusicExpanded] = useState(false);
    const [workExpanded, setWorkExpanded] = useState(false);

    return (
        <div className="academic-background-container">
            <h2 className='background-title'>
                <span className="big-letter">A</span>cademic Background <span className="bold-title">&</span> <span className="big-letter">C</span>areer experience
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
                                <h3>Co-founder & Frontend team lead in Tezix</h3>
                                <p></p>
                                <p>09/2020 -
                                    present</p>
                            </div>
                            <div className="academic-info">
                                <h3>Frontend Developer in El Dedal Amarillo</h3>
                                <p></p>
                                <p>2018 - 2019</p>
                            </div>
                            <div className="academic-info">
                                <h3>Freelance educational consultant</h3>
                                <p></p>
                                <p>09/2020 -
                                    present</p>
                            </div>
                            <div className="academic-info">
                                <h3>Full Professor at EMMD San Sebastián de los Reyes</h3>
                                <p>Music theory - Piano - Music and movement - Musical ensemble
                                    Harmony</p>
                                <p>09/2013 - present</p>
                            </div>
                            <div className="academic-info">
                                <h3>Profesor in the Senior University Program</h3>
                                <p>Musical audition - Music history - Music theory</p>
                                <p> 09/2017-
                                    06/2020</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AcademicBackground;
