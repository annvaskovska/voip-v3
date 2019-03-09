import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tick from './Tick';
import './styles.css';
import './inputs.css';

class WeOffer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            internalLines: 7,
            externalLines: 10,
            voiceMenuLevels: 8,
            autodialerOn: false,
            autoInformatorOn: false,
            autoPollOn: false,
            total: 0,
        };
        this.onInternalLinesChange = this.onInternalLinesChange.bind(this);
        this.onExternalLinesChange = this.onExternalLinesChange.bind(this);
        this.onVoiceMenuLevelsChange = this.onVoiceMenuLevelsChange.bind(this);
        this.onAutodialerToggle = this.onAutodialerToggle.bind(this);
        this.onAutoInformatorToggle = this.onAutoInformatorToggle.bind(this);
        this.onAutoPollToggle = this.onAutoPollToggle.bind(this);
    }

    onInternalLinesChange(event) {
        const prev = this.state.internalLines;
        const total = this.state.total - 10 * prev + 10 * event.target.value;
        this.setState({
            internalLines: event.target.value,
            total,
        });
    }

    onExternalLinesChange(event) {
        this.setState({
            externalLines: event.target.value,
        });
    }

    onVoiceMenuLevelsChange(event) {
        this.setState({
            voiceMenuLevels: event.target.value,
        });
    }

    onAutodialerToggle() {
        const total = !this.state.autodialerOn ? this.state.total + this.state.internalLines * 10 : this.state.total - this.state.internalLines * 10;
        this.setState({
            autodialerOn: !this.state.autodialerOn,
            total,
        });

    }

    onAutoInformatorToggle() {
        const total = !this.state.autoInformatorOn ? this.state.total + 200 : this.state.total - 200;
        this.setState({
            autoInformatorOn: !this.state.autoInformatorOn,
            total,
        });
    }

    onAutoPollToggle() {
        const total = !this.state.autoPollOn ? this.state.total + 250 : this.state.total - 250;
        this.setState({
            autoPollOn: !this.state.autoPollOn,
            total,
        });
    }

    render() {
        return (
            <Container className='whe-offer-container'>
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
                            <div className='full-header'>Business</div>
                            <div className='full-price'><span style={{ fontSize: '0.4em' }}>от</span>$20</div>
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
                            <input
                                type='number'
                                className='input-internal-lines'
                                value={this.state.internalLines}
                                onChange={this.onInternalLinesChange}
                            />
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
                            3
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-full m-auto d-flex justify-content-center align-items-center'>
                            <input
                                type='number'
                                className='input-internal-lines'
                                value={this.state.externalLines}
                                onChange={this.onExternalLinesChange}
                            />
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
                            1 уровень
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-full m-auto d-flex justify-content-center align-items-center'>
                            <input
                                type='number'
                                className='input-internal-lines'
                                value={this.state.voiceMenuLevels}
                                onChange={this.onVoiceMenuLevelsChange}
                            />
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
                            40 дней
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-full m-auto d-flex justify-content-center align-items-center'>
                            { `${2 * this.state.internalLines} дней` }
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
                            1
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-full m-auto d-flex justify-content-center align-items-center'>
                            неорганиченно
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
                        <div className='cell-header-trial'>-</div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-header-full with-toggle'>
                            {`$ ${10 * this.state.internalLines}`}
                            <div
                                className='toggle-container'
                                onChange={this.onAutodialerToggle}
                            >
                                <input
                                    id='autodialer'
                                    type='checkbox'
                                    className='tgl tgl-flat'
                                />
                                <label
                                    className='tgl-btn'
                                    htmlFor="autodialer"
                                />
                            </div>
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
                        <div className='cell-header-trial'>-</div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-header-full with-toggle'>
                            $ 200
                            <div
                                className='toggle-container'
                                onChange={this.onAutoInformatorToggle}
                            >
                                <input
                                    id='autoInformator'
                                    type='checkbox'
                                    className='tgl tgl-flat'
                                />
                                <label
                                    className='tgl-btn'
                                    htmlFor="autoInformator"
                                />
                            </div>
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
                        <div className='cell-header-trial'>-</div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-header-full with-toggle'>
                            $ 250
                            <div
                                className='toggle-container'
                                onChange={this.onAutoPollToggle}
                            >
                                <input
                                    id='autoPollOn'
                                    type='checkbox'
                                    className='tgl tgl-flat'
                                />
                                <label
                                    className='tgl-btn'
                                    htmlFor="autoPollOn"
                                />
                            </div>
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
                            <Tick/>
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-header-full'>
                            $ 14
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
                            <Tick/>
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-header-full'>
                            <Tick/>
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
                            <Tick/>
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-full m-auto d-flex justify-content-center align-items-center'>
                            <Tick/>
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
                            $20/час
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-full m-auto d-flex justify-content-center align-items-center'>
                            $12/час
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
                            с 9 до 19 в рабочие дни
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-full m-auto d-flex justify-content-center align-items-center'>
                            круглосуточно
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
                            24 часа
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-full m-auto d-flex justify-content-center align-items-center'>
                            6 часов
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
                            3 часа
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-full m-auto d-flex justify-content-center align-items-center'>
                            1 час
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
                            6 часов
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-full m-auto d-flex justify-content-center align-items-center'>
                            1 час
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
                            -
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-full m-auto d-flex justify-content-center align-items-center'>
                            по договоренности
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
                            -
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-full m-auto d-flex justify-content-center align-items-center'>
                            <Tick/>
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
                            -
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-regular-full m-auto d-flex justify-content-center align-items-center'>
                            <Tick/>
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
                            <div className='total-price'>
                                {`$ ${this.state.total}`}
                            </div>
                            <div className='total-duration'>в  месяц</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default WeOffer;