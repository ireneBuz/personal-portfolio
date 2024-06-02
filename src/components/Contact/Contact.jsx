
import './Contact.css'
import { Col, Row } from 'react-bootstrap'
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

const Contact = ({ language }) => {

    const [state, handleSubmit] = useForm("xnqkryva");
    const [hasContacted, setHasContacted] = useState(undefined)
    if (!hasContacted && state.succeeded) {
        setHasContacted(
            language === 'ENG' ?
                'Message succesfully sent. I will contact you as soon as possible :)'
                :
                'Se ha enviado tu mensaje. Te contactaré lo antes posible :)'
        )
    }

    return (
        <>
            <Row className='contact-card justify-content-center contactForm' role="region" aria-label={language === 'ENG' ? 'Contact me' : 'Contáctame'}>
                <Col md='7' xs='11' className='text-center'>
                    <div className="card-3d-wrap">
                        <h3 role="heading" aria-level="1">
                            {language === 'ENG' ? <span className='bordered-text'>Contact</span> : <span className='bordered-text'>Contáctame</span>}
                        </h3>
                        {!state.succeeded ? (
                            <form onSubmit={handleSubmit} className='form-group'>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="form-style"
                                    placeholder={language === 'ENG' ? 'Your email' : 'Tu email'}
                                    aria-label={language === 'ENG' ? 'Your email' : 'Tu email'}
                                />
                                <ValidationError
                                    prefix={language === 'ENG' ? 'Email' : 'Correo electrónico'}
                                    field="email"
                                    errors={state.errors}
                                />
                                <textarea
                                    id="message"
                                    name="message"
                                    style={{ overflow: 'hidden', paddingBottom: '170px' }}
                                    className="form-style mt-3"
                                    placeholder={language === 'ENG' ? 'Your message' : 'Tú mensaje'}
                                    aria-label={language === 'ENG' ? 'Your message' : 'Tú mensaje'}
                                />
                                <ValidationError
                                    prefix={language === 'ENG' ? 'Message' : 'Mensaje'}
                                    field="message"
                                    errors={state.errors}
                                />
                                <button type="submit" disabled={state.submitting} className="btn mt-4 mb-2">
                                    {language === 'ENG' ? 'Send your message' : 'Enviar'}
                                </button>
                            </form>
                        ) : (
                            <div className='form-style pt-2 pb-5' role="status" aria-live="polite">
                                {hasContacted}
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </>
    )
}




export default Contact
