import React from 'react';
import './PersonalInfoSection.css';

const PersonalInfoSection = ({ language }) => {
    return (
        <div className="personal-info-container">
            <h2 className='info-title'>
                {language === 'ENG' ? 'Or you can download my ' : 'O puedes descargar mi '}
                <a href="/images/cvIreneBuz.png" className="cv-button" download>
                    {language === 'ENG' ? 'Resume' : 'Currículum'}
                </a>
            </h2>
        </div>
    );
};

export default PersonalInfoSection;
