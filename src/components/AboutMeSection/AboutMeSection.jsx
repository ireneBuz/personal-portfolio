import './AboutMeSection.css';
import React, { useEffect, useState } from 'react';

const AboutMeSection = ({ language }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []); return (
        <div className={`about-me-container ${loaded ? 'loaded' : ''}`}>
            <div className="text-content">
                <h2>
                    {language === 'ENG' ? 'Hello again' : 'Hola otra vez'}
                    <span className="exclamation">!</span>
                </h2>
                <p className='about-thanks'>{language === 'ENG' ? 'Thank you for getting this far!' : 'Gracias por llegar hasta aquí!'}</p>
            </div>
            <div className="image-content">
                <img src="/images/profile-photo.png" alt="About me" />
            </div>
        </div>
    );
};

export default AboutMeSection;
