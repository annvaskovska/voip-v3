import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';

class WhyUs extends React.Component {
    render() {

        return (
            <Container className='why-us-container'>
                <Row>
                    <Col md={{ span: 12 }} className='why-us-header m-auto d-flex justify-content-center align-items-center'>
                        Почему именно мы?
                    </Col>
                </Row>
                <Row className='why-us-divider'>
                    <Col md={{ span: 12  }} className='m-auto d-flex justify-content-center align-items-center'>________</Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col md={{ span: 3 }} className='align-self-center'>
                        <div className='why-us-prices'>
                            <div className='icon-container m-auto d-flex justify-content-center align-items-center'>
                                <div className='icon-price-tag' />
                            </div>
                            <div className='why-us-title m-auto d-flex justify-content-center align-items-center'>Цены</div>
                            <div className='why-us-description m-auto d-flex justify-content-center align-items-center'>
                                Ознакомьтесь с нашими тарифами,
мы предлагаем полный спектр услег телефонии
за очень привлекательными ценами.
                            </div>
                        </div>
                    </Col>
                    <Col md={{ span: 4 }} className='align-self-center'>
                        <div className='why-us-flexibility'>
                            <div className='icon-container m-auto d-flex justify-content-center align-items-center'>
                                <div className='icon-cloud' />
                            </div>
                            <div className='why-us-title m-auto d-flex justify-content-center align-items-center'>Гибкость</div>
                            <div className='why-us-description m-auto d-flex justify-content-center align-items-center'>
                                Под каждого клиента в облаке формируется
персональная АТС на базе Asterisk,  с возможностью
переноса на  сервер клиента (on-demand).
                            </div>
                        </div>
                    </Col>
                    <Col md={{ span: 3 }} className='align-self-center'>
                        <div className='trial'>
                            <div className='icon-container m-auto d-flex justify-content-center align-items-center'>
                                <div className='icon-equality' />
                            </div>
                            <div className='why-us-title m-auto d-flex justify-content-center align-items-center'>Пробный период</div>
                            <div className='why-us-description m-auto d-flex justify-content-center align-items-center'>
                                Мы предлагаем попробовать качественную
телефонию в пробной версии на
протяжении 14 дней!
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default WhyUs;