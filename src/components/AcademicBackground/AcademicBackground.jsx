import React, { useState } from 'react';
import './AcademicBackground.css';

const AcademicBackground = () => {
    const [computerExpanded, setComputerExpanded] = useState(false);
    const [musicExpanded, setMusicExpanded] = useState(false);

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
                        <div className="academic-info">
                            <h3>Especialidad 1</h3>
                            <p>Descripción de la especialidad 1.</p>
                            <p>Año de obtención: 20XX</p>
                        </div>
                    )}
                </div>
                <div className="photo">
                    <img src="/images/music-background.png" alt="Piano" />
                    <div className="expand-button" onClick={() => setMusicExpanded(!musicExpanded)}>
                        {musicExpanded ? 'Hide' : 'Show'} Academic Background
                    </div>
                    {musicExpanded && (
                        <div className="academic-info">
                            <h3>Especialidad 1</h3>
                            <p>Descripción de la especialidad 1.</p>
                            <p>Año de obtención: 20XX</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AcademicBackground;
