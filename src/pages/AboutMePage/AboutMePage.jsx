import './AboutMePage.css';
import AboutMeSection from '../../components/AboutMeSection/AboutMeSection';

const AboutMePage = ({ language }) => {
    return (
        <section id="about-me-section" role="region">
            <AboutMeSection language={language} />
        </section>


    )
}
export default AboutMePage