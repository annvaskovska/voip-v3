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
                            <div className='full-duration'>в месяц</div>
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
                <Row className='row-header'>
                    <Col md={{ span: 6 }}>
                        <div className='cell-full-title'>
                            Автодайлер
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
                <Row className='row-header'>
                    <Col md={{ span: 6 }}>
                        <div className='cell-full-title'>
                            Автоинформатор
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
                <Row className='row-header'>
                    <Col md={{ span: 6 }}>
                        <div className='cell-full-title'>
                            Автоопросник
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
                <Row className='row-header'>
                    <Col md={{ span: 6 }}>
                        <div className='cell-full-title'>
                            CRM
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
                <Row className='row-header'>
                    <Col md={{ span: 6 }}>
                        <div className='cell-full-title'>
                            Техническая поддержка
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
                            Бесплатная консультация по вопросам телефонии
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
                            Дополнительные технические настройки системы
                            согласно техническому заданию заказчика
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
                            Техническая поддержка
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
                            Консультации, ответим в течение
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
                            Время реагирование на аварию
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
                            Время реагирования на критический вопрос
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
                            Выезд специалиста
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
                            Мониторинг работы оборудования заказчика, ICMP
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
                            Возможность переноса сервиса на оборудование
                            заказчика
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
                <Row className='row-total'>
                    <Col md={{ span: 6 }}>
                        <div className='cell-total-title'>
                            ИТОГ
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-total-trial m-auto d-flex flex-column'>
                            <div className='total-price'>$0</div>
                            <div className='total-duration'>14 дней</div>
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-total-full m-auto d-flex flex-column'>
                            <div className='total-price'>$300</div>
                            <div className='total-duration'>в  месяц</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default WeOffer;