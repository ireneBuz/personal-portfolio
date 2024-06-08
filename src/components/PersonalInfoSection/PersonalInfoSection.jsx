import React from 'react';
import './PersonalInfoSection.css';

const PersonalInfoSection = ({ language }) => {
    return (
        <div className="personal-info-container">
            <h2 className='info-title'>
                Or you can download my <a href="/path/to/your/cv.pdf" className="cv-button">Resume</a>
            </h2>
        </div>
    );
};

export default PersonalInfoSection;
