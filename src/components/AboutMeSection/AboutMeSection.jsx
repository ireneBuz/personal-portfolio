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
                <p className='about-text'>{language === 'ENG' ? 'After dedicating my entire life to music teaching, in 2017 I decided to pursue another of my passions: web development. Deeply fascinated by everything related to a good user experience, ensuring that the product meets their needs and is easy to use. My experience in pedagogy allows me to empathize, communicate effectively, and understand the psychological foundations necessary to comprehend project requirements and work effectively in a team.' : 'Aquí tienes el texto completo con la continuación:Después de dedicarme toda la vida a la enseñanza musical, en 2017 decidí empezar con otra de mis pasiones: el desarrollo web. Profundamente fascinada con todo lo relacionado con una buena experiencia de usuario, asegurando que el producto cumpla con sus necesidades y sea fácil de usar. Mi experiencia en pedagogía me permite empatizar, comunicarme efectivamente y entender las bases psicológicas necesarias para comprender los requerimientos de un proyecto y trabajar de manera efectiva en equipo.'}</p>
            </div>
            <div className="image-content">
                <img src="/images/profile-photo.png" alt="About me" />
            </div>
        </div>
    );
};

export default AboutMeSection;
