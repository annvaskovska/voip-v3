import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';

const JoinUs = () => (
    <Container fluid='true' className='join-us-container'>
        <Row>
            <Col
                md={{ span: 12 }}
                className='join-us-title d-flex justify-content-center align-items-end m-auto'
            >
                Сделай свой бизнес продуктивнее!
            </Col>
        </Row>
        <Row>
            <Col
                md={{ span: 12 }}
                className='join-us-divider d-flex justify-content-center align-items-center m-auto'
            >________</Col>
        </Row>
        <Row>
            <Col
                md={{ span: 12 }}
                className='try-btn-container d-flex justify-content-center align-items-start m-auto'
            >
                <button type='button' className='join-us-try-btn'>Попробовать</button>
            </Col>
        </Row>
    </Container>
);

export default JoinUs;