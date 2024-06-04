import React from 'react';
import './PersonalInfoSection.css';

const PersonalInfoSection = ({ language }) => {
    return (
        <div className="personal-info-container">
            <h2 className='info-title'>
                <span className="big-letter">G</span>et More Info &
            </h2>
            <a href="/path/to/your/cv.pdf" className="cv-button">Download CV</a>

            <h2 className='info-title'>
                <span className="big-letter">S</span>ee you soon
                <span className="exclamation-info">!</span>

            </h2>

        </div>

    );
};

export default PersonalInfoSection;
