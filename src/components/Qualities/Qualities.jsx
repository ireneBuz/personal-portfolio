import { Col, Container, Navbar, Row, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Qualities.css'


const Qualities = ({ language }) => {
    return (
        <div className='qualities'>
            <h2 role="heading" aria-level="1" className="slide-rotate-hor-top">
                {language === 'ENG' ? 'My skills' : 'Mis habilidades'}
            </h2>


        </div>

    );
}

export default Qualities;