import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
        };
        this.onInternalLinesChange = this.onInternalLinesChange.bind(this);
        this.onExternalLinesChange = this.onExternalLinesChange.bind(this);
        this.onVoiceMenuLevelsChange = this.onVoiceMenuLevelsChange.bind(this);
        this.onAutodialerToggle = this.onAutodialerToggle.bind(this);
        this.onAutoInformatorToggle = this.onAutoInformatorToggle.bind(this);
        this.onAutoPollToggle = this.onAutoPollToggle.bind(this);
    }

    onInternalLinesChange(event) {
        this.setState({
            internalLines: event.target.value,
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
        const oldAutodialer = this.state.autodialerOn;
        this.setState({
            autodialerOn: !oldAutodialer,
        });
    }

    onAutoInformatorToggle() {
        const oldAutoInformatorOn = this.state.autodialerOn;
        this.setState({
            autoInformatorOn: !oldAutoInformatorOn,
        });
    }

    onAutoPollToggle() {
        const oldAutoPollOn = this.state.autodialerOn;
        this.setState({
            autoPollOn: !oldAutoPollOn,
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
                        <div className='cell-header-trial'>
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-header-full with-toggle'>
                            {`$ ${10 * this.state.internalLines}`}
                            <div className='toggle-container'>
                                <input
                                    id='autodialer'
                                    type='checkbox'
                                    value={this.state.autodialerOn}
                                    onChange={this.onAutodialerToggle}
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
                        <div className='cell-header-trial'>
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-header-full with-toggle'>
                            $ 200
                            <div className='toggle-container'>
                                <input
                                    id='autoInformator'
                                    type='checkbox'
                                    value={this.state.autoInformatorOn}
                                    onChange={this.onAutoInformatorToggle}
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
                        <div className='cell-header-trial'>
                        </div>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <div className='cell-header-full with-toggle'>
                            $ 250
                            <div className='toggle-container'>
                                <input
                                    id='autoPollOn'
                                    type='checkbox'
                                    value={this.state.autoPollOn}
                                    onChange={this.onAutoPollToggle}
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