import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';

const Total = () => (
    <Container className='total-container'>
        <Row>
            <Col md={{ span: 3, offset: 6 }}>
                <div className='total-cont'>
                    <button type='button' className='btn-outline-try'>Попробовать сейчас</button>
                </div>
            </Col>
            <Col md={{ span: 3 }}>
                <div className='total-cont total-cont-full'>
                    <button type='button' className='btn-outline-try btn-outline-try-full'>Попробовать сейчас</button>
                </div>
            </Col>
        </Row>
    </Container>
);

export default Total;