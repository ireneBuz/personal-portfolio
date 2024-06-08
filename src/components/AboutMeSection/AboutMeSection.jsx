// Import CSS file
import './AboutMeSection.css';
import React, { useEffect, useState } from 'react';

const AboutMeSection = ({ language }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div className={`about-me-container ${loaded ? 'loaded' : ''}`}>
            <div className="text-content">
                <h2>
                    {language === 'ENG' ? 'Hello again' : 'Hola otra vez'}
                    <span className="exclamation">!</span>
                </h2>
                {/* Conditionally render text based on language */}
                <p className='about-text'>
                    {language === 'ENG' ?
                        <>
                            After dedicating my entire life to <span className="highlight">music teaching</span>, in 2017 I decided to pursue another of my passions: <span className="highlight">web development</span>. Deeply fascinated by everything related to a good <span className="highlight">user experience</span>, ensuring that the product meets their needs and is easy to use. My experience in <span className="highlight">pedagogy</span> allows me to <span className="highlight">empathize</span>, <span className="highlight">communicate effectively</span>, and understand the <span className="highlight">psychological foundations</span> necessary to comprehend project requirements and work effectively in a <span className="highlight">team</span>.
                        </>
                        :
                        <>
                            Aquí tienes el texto completo con la continuación: Después de dedicarme toda la vida a la <span className="highlight">enseñanza musical</span>, en 2017 decidí empezar con otra de mis pasiones: el <span className="highlight">desarrollo web</span>. Profundamente fascinada con todo lo relacionado con una buena <span className="highlight">experiencia de usuario</span>, asegurando que el producto cumpla con sus necesidades y sea fácil de usar. Mi experiencia en <span className="highlight">pedagogía</span> me permite <span className="highlight">empatizar</span>, <span className="highlight">comunicarme efectivamente</span> y entender las bases <span className="highlight">psicológicas</span> necesarias para comprender los requerimientos de un proyecto y trabajar de manera efectiva en <span className="highlight">equipo</span>.
                        </>
                    }
                </p>
            </div>
            <div className="image-content">
                <img src="/images/profile-photo.png" alt="About me" />
            </div>
        </div>
    );
};

export default AboutMeSection;
