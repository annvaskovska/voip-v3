import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';
import img from '../../resources/img/people.jpg';

const Opportunities = () => (
    <Container fluid='true' className='opportunities-container'>
        <Row>
            <Col md={{ span: 6 }}>
                <Row>
                    <Col md={{ span: 8, offset: 4 }} className='opportunities-title m-auto d-flex justify-content-start align-items-center'>
                        Возможности для бизнеса
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 8, offset: 4  }} className='opportunities-divider m-auto d-flex justify-content-start align-items-center'>________</Col>
                </Row>
                <Row>
                    <Col md={{ span: 8, offset: 4  }} className='opportunities-text m-auto d-flex justify-content-start align-items-center'>
                        С VOIP+ для вашей компании становятся доступны
                        самые передовые возмодности эффективной бизнес
                        теоефонии Используя каждый продукт
                        отдельно, вы получаете эффективный инструмент для
                        реализации поставленных задач.
                    </Col>
                    <br />
                    <Col md={{ span: 8, offset: 4 }} className='opportunities-text m-auto d-flex justify-content-start align-items-center'>
                        Используя решения VOIP+ комплексно, вы формируете мощную
                        платформу для развития бизнеса.
                    </Col>
                </Row>
            </Col>
            <Col md={{ span: 6 }} className='opportunities-img m-auto d-flex justify-content-center align-items-center'>
                <img
                    src={img}
                    alt='opp'
                />
            </Col>
        </Row>
    </Container>
);

export default Opportunities;