import './AboutMePage.css';
import AboutMeSection from '../../components/AboutMeSection/AboutMeSection';
import Navigation from '../../components/Navigation/Navigation'
import AcademicBackground from '../../components/AcademicBackground/AcademicBackground';
import PersonalInfoSection from '../../components/PersonalInfoSection/PersonalInfoSection';

const AboutMePage = ({ language }) => {
    return (
        <>
            <section id="nav-section" role="region">
                <Navigation language={language} />
            </section>
            <section id="about-me-section" role="region">
                <AboutMeSection language={language} />
            </section>
            <section id="academic-background-section" role="region">
                <AcademicBackground language={language} />
            </section>
            <section id="personal-info-section" role="region">
                <PersonalInfoSection language={language} />
            </section>


        </>
    )
}
export default AboutMePage