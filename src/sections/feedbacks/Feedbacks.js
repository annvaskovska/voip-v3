import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';

class Feedbacks extends React.Component {
    renderFeedback({ text, name, position }) {
        return (
            <Col md={{ span: 4 }} className='align-self-center'>
                <div className='feedback-cloud'>{text}</div>
                <div className='info-person-container d-flex justify-content-start align-items-center'>
                    <div className='icon-person-container d-flex justify-content-start align-items-center'>
                        <div className='icon-price-tag' />
                    </div>
                    <div className='text-person-container d-flex flex-column justify-content-start'>
                        <div className='feedback-person-name d-flex justify-content-start align-items-center'>{name}</div>
                        <div className='feedback-person-description d-flex justify-content-start align-items-center'>
                            {position}
                        </div>
                    </div>
                </div>
            </Col>
        );
    }

    render() {

        return (
            <Container className='feedback-container'>
                <Row>
                    <Col md={{ span: 12 }} className='feedback-header m-auto d-flex justify-content-center align-items-center'>
                        Отзывы
                    </Col>
                </Row>
                <Row className='feedback-divider'>
                    <Col md={{ span: 12  }} className='m-auto d-flex justify-content-center align-items-center'>________</Col>
                </Row>
                <Row className='justify-content-md-center'>
                    {
                        this.renderFeedback({
                            text: 'Заказывали установку АТС VOIP+.\n' +
                            'Понравился контактность сотрудников\n' +
                            'компании и быстрая организация АТС. Статистика\n' +
                            'работает отлично, информация о звонках клиентов\n' +
                            'бесперебойно поступает на сервер, что позволяет\n' +
                            'не тратить драгоценное время на формирование\n' +
                            'отчетов.',
                            name: 'Анастасия Холоватюк',
                            position: 'Менеджер',
                        })
                    }
                    {
                        this.renderFeedback({
                            text: 'Уже не первый месяц пользуемся CRM & ERP \n' +
                            'VOIP+. Время на обработку одного заказа \n' +
                            'существенно сократилось, что не может не радовать.\n' +
                            'Менеджеры нашей компании больше не выполняют \n' +
                            'десятки лишних кликов и не путаются в суматохе \n' +
                            'между множеством открывшихся программных окон.',
                            name: 'Антон Шулев',
                            position: 'Менеджер',
                        })
                    }
                    {
                        this.renderFeedback({
                            text: 'Вся информация выводится в одной рабочей \n' +
                            'области, удобно переключаться между окнами, \n' +
                            'закрывать их, вносить корректировки. Мне, как \n' +
                            'руководителю, особенно нравится данный сервис, \n' +
                            'так как есть возможность в любой момент зайти \n' +
                            'на сервис и просмотреть успеваемость своих \n' +
                            'менеджеров.',
                            name: 'Некто',
                            position: 'Менеджер',
                        })
                    }
                </Row>
            </Container>
        );
    }
}

export default Feedbacks;