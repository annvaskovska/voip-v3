import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';

class WeOffer extends React.Component {
    render() {

        return (
            <Container className='whe-offer-container'>
                <Row>
                    <Col md={{ span: 12 }} className='whe-offer-header m-auto d-flex justify-content-center align-items-center'>
                        Пакеты услуг
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 3, offset: 6 }}>
                        <div className='trial-cont'>
                            <div className='trial-header'>Пробный</div>
                            <div className='trial-price'>$0</div>
                            <div className='trial-duration'>14 дней</div>
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='full-cont'>
                            <div className='full-header'>Пробный</div>
                            <div className='full-price'>$0</div>
                            <div className='full-duration'>14 дней</div>
                        </div>
                    </Col>
                </Row>
                <Row className='row-header'>
                    <Col md={{ span: 6 }}>
                        <div className='cell-full-title'>
                           Телефония
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-header-trial'>
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-header-full'>
                        </div>
                    </Col>
                </Row>
                <Row className='row-regular'>
                    <Col md={{ span: 6 }}>
                        <div className='cell-regular-title'>
                            Количество внутренних линий
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-trial m-auto d-flex justify-content-center align-items-center'>
                            5
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-full m-auto d-flex justify-content-center align-items-center'>
                            6
                        </div>
                    </Col>
                </Row>
                <Row className='row-regular'>
                    <Col md={{ span: 6 }}>
                        <div className='cell-regular-title'>
                            Количество внешних линий
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-trial m-auto d-flex justify-content-center align-items-center'>
                            9
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-full m-auto d-flex justify-content-center align-items-center'>
                            4
                        </div>
                    </Col>
                </Row>
                <Row className='row-regular'>
                    <Col md={{ span: 6 }}>
                        <div className='cell-regular-title'>
                            Голосовое меню
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-trial m-auto d-flex justify-content-center align-items-center'>
                            9
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-full m-auto d-flex justify-content-center align-items-center'>
                            4
                        </div>
                    </Col>
                </Row>
                <Row className='row-regular'>
                    <Col md={{ span: 6 }}>
                        <div className='cell-regular-title'>
                            Сохранение записей разговоров
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-trial m-auto d-flex justify-content-center align-items-center'>
                            2
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-full m-auto d-flex justify-content-center align-items-center'>
                            7
                        </div>
                    </Col>
                </Row>
                <Row className='row-regular'>
                    <Col md={{ span: 6 }}>
                        <div className='cell-regular-title'>
                            Количество груп
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-trial m-auto d-flex justify-content-center align-items-center'>
                            45
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-full m-auto d-flex justify-content-center align-items-center'>
                            4
                        </div>
                    </Col>
                </Row>
                <Row className='row-regular'>
                    <Col md={{ span: 6 }}>
                        <div className='cell-regular-title'>
                            Телефония
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-trial m-auto d-flex justify-content-center align-items-center'>
                            9
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-full m-auto d-flex justify-content-center align-items-center'>
                            4
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default WeOffer;