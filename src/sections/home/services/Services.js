import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';

class Services extends React.Component {
    renderService({ title, icon, description }) {
        return (
            <Col md={{ span: 2 }} className='align-self-center'>
                <div className='services-prices'>
                    <div className={`${icon} m-auto d-flex justify-content-center align-items-center`} />
                    <div className='services-title m-auto d-flex justify-content-center align-items-center'>{title}</div>
                    <div className='services-description m-auto d-flex justify-content-center align-items-center'>{description}</div>
                </div>
            </Col>
        );
    }

    render() {

        return (
            <Container fluid='true' className='services-container'>
                <Row>
                    <Col md={{ span: 12 }} className='services-header m-auto d-flex justify-content-center align-items-center'>
                        Наши сервисы
                    </Col>
                </Row>
                <Row className='services-divider'>
                    <Col md={{ span: 12  }} className='m-auto d-flex justify-content-center align-items-center'>________</Col>
                </Row>
                <Row className='justify-content-md-center'>
                    {
                        this.renderService({
                            title: 'Asterisk',
                            icon: 'services-asterisk',
                            description: '\n' +
                            'Это АТС, которой пользуются  \n' +
                            'сотни тысяч людей по  всему \n' +
                            'миру, она поддерживает \n' +
                            'множество современных\n' +
                            ' протоколов передачи \n' +
                            'информации.',
                        })
                    }
                    {
                        this.renderService({
                            title: 'Odoo S.',
                            icon: 'services-odoo',
                            description: 'Удобная CRM система от \n' +
                            'бельгийской компании Odoo S. \n' +
                            'Используется для управления \n' +
                            'базами данных серверной части. ',
                        })
                    }
                    {
                        this.renderService({
                            title: 'CloudPBX',
                            icon: 'services-cloud-bpx',
                            description: 'Качественное решение \n' +
                            'для быстрой и легкой установки системы телефонии в офисе, \n' +
                            'где есть интернет связь. ',
                        })
                    }
                    {
                        this.renderService({
                            title: 'Voip Trunks',
                            icon: 'services-voip-trunks',
                            description: 'Это виртуальный канал \n' +
                            'между IP АТС клиента и \n' +
                            'IP-оборудованием \n' +
                            'оператора, работающий по \n' +
                            'технологии IP-телефонии.',
                        })
                    }
                    {
                        this.renderService({
                            title: 'Autodialer',
                            icon: 'services-autodialer',
                            description: 'Это автоматический \n' +
                            'номеронабиратель, который \n' +
                            'устанавливается для \n' +
                            'обработки большого потока \n' +
                            'клиентских заказов и\n' +
                            ' систематического их обзвона',
                        })
                    }
                </Row>
            </Container>
        );
    }
}

export default Services;