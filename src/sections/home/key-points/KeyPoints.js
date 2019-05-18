import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';

class KeyPoints extends React.Component {
    renderSection({ title, icon, text, mdParams }) {
        return (
            <Col md={mdParams} className='key-points-block'>
                <Row>
                    <Col md={{ span: 2 }}>
                        <div className='key-points-icon-container m-auto d-flex justify-content-center align-items-center'>
                            <div className={icon} />
                        </div>
                    </Col>
                    <Col md={{ span: 6 }}>
                        <div className='key-points-title m-auto d-flex justify-content-start align-items-center'>
                            {title}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='key-points-description m-auto d-flex justify-content-center align-items-center'>
                            {text}
                        </div>
                    </Col>
                </Row>
            </Col>
        );
    }

    render() {

        return (
            <Container fluid='true' className='key-points-container'>
                <Row>
                    {
                        this.renderSection({
                            title: 'Облачная АТС',
                            icon: 'cloud-atc',
                            text: 'Это гибкое и высокотехнологичное предложение для \n' +
                            'телефонизации Вашего предприятия. Вы просто \n' +
                            'регистрируетесь,  выбираете тарифный пакет и получаете \n' +
                            'базовые услуги телефонии, если у вaс имеются задачи мы \n' +
                            'быстро реализуем их.',
                            mdParams: { span: 4, offset: 2 }
                        })
                    }
                    {
                        this.renderSection({
                            title: 'Управление отношениями с клиентами и \n' +
                            'продажами CRM & ERP',
                            icon: 'crm',
                            text: 'VOIP+ CRM&ERP на базе Odoo CRM является мощным \n' +
                            'инструментом в управлении бизнесом и всеми его \n' +
                            'процессами. В зависимости от Ваших потребностей и \n' +
                            'задач мы запрограммируем VOIP+ CRM&ERP, чтоб Вам \n' +
                            'было легко вести свой бизнес',
                            mdParams: { span: 4 }
                        })
                    }
                </Row>
                <Row>
                    {
                        this.renderSection({
                            title: 'Управление персоналом HR',
                            icon: 'hr',
                            text: 'Благодаря автодиалеру можно роботизировать колл-центр. \n' +
                            'Совместная работа оператора, автодиалера и автоинформатора \n' +
                            'повышает производительность колл-центра и \n' +
                            'маркетинговых кампаний.',
                            mdParams: { span: 4, offset: 2 }
                        })
                    }
                    {
                        this.renderSection({
                            title: 'Международная телефония',
                            icon: 'hr',
                            text: 'Многоканальные номера в 90 стран мира.  Вы можете найти\n' +
                            'стоимость звонков здесь.',
                            mdParams: { span: 4 }
                        })
                    }
                </Row>
            </Container>
        );
    }
}

export default KeyPoints;