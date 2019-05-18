import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';

class ContactUs extends React.Component {
    render() {

        return (
            <Container className='contact-us-container'>
                <Row>
                    <Col md={{ span: 12 }} className='contact-us-header m-auto d-flex justify-content-center align-items-center'>
                        Свяжитесь с нами
                    </Col>
                </Row>
                <Row className='contact-us-divider'>
                    <Col md={{ span: 12  }} className='m-auto d-flex justify-content-center align-items-center'>________</Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col md={{ span: 6 }} className='align-self-center d-flex flex-column'>
                        <div className='contact-us-general d-flex'>
                            <div className='contact-us-description'>
                                Мы работаем на рынке телекоммуникаций с 2005 года,
                                предоставляя услуги качественной корпоративной связи.
                                <br/>
                                <br/>x
                                <br/>
                                Проводя регулярный мониторинг существующих
                                тенденций на мировом рынке, мы стремимся предоставлять
                                самые современные решения, которые не только
                                обеспечивают необходимый Вам уровень коммуникации,
                                но и, в тоже время, предоставляют маскимальную гибкость
                                решений за приемлимые средства.
                            </div>
                        </div>
                        <div className='contact-us-contacts'>
                            <div className='contact-us-address f-flex'>
                                <p className='contact-us-c-text d-flex align-items-center'>
                                    <span className='contact-us-icon-location'/>
                                    Киев, ул. Вавиловых, 19
                                </p>
                            </div>
                            <div className='contact-us-address f-flex'>
                                <p className='contact-us-c-text d-flex align-items-center'>
                                    <span className='contact-us-icon-call'/>
                                    +3067 12 34 567
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={{ span: 6 }}>
                        <div className='contact-us-form d-flex flex-column'>
                            <div className='contact-us-any-questions d-flex justify-content-start'>
                                Остались вопросы? Пишите, мы обязательно на них ответим!
                            </div>
                            <input
                                type='text'
                                className='contact-us-email d-flex justify-content-start'
                                placeholder='e-mail'
                            />
                            <textarea
                                className="contact-us-message"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder='Сообщение'
                            />
                            <div className='contact-us-button-container m-auto d-flex justify-content-center align-items-center'>
                                <button type='button' className='btn-outline-contact-us'>Попробовать сейчас</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ContactUs;