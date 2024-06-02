import Hero from '../../components/Hero/Hero'
import Contact from '../../components/Contact/Contact'
import Projects from '../../components/Projects/Projects'
import Navigation from '../../components/Navigation/Navigation'
import Skills from '../../components/Skills/Skills'
import './HomePage.css'

const HomePage = ({ language }) => {
    return (
        <>
            <section id="nav-section" role="region">
                <Navigation language={language} />
            </section>

            <section id="hero-section" role="region">
                <Hero language={language} />
            </section>

            <section id="projects-section" role="region" aria-label={language === 'ENG' ? 'Projects Section' : 'Sección de Proyectos'}>
                <Projects language={language} />
            </section>
            <section id="skills-section">
                <Skills language={language} />
                {/* <Background language={language} /> */}
            </section>

            <section id="contact-me-section" role="region" aria-label={language === 'ENG' ? 'Contact Me Section' : 'Sección de Contacto'}>
                <Contact language={language} />
            </section>
        </>
    )
}

export default HomePage
