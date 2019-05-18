import React from 'react';
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';

const Total = () => (
    <Container className='total-container'>
        <Row>
            <Col md={{ span: 3, offset: 6 }}>
                <div className='total-cont'>
                    <Link to='buy-step-2'>
                        <button type='button' className='btn-outline-try'>Попробовать сейчас</button>
                    </Link>
                </div>
            </Col>
            <Col md={{ span: 3 }}>
                <div className='total-cont total-cont-full'>
                    <Link to='buy-step-2'>
                        <button type='button' className='btn-outline-try btn-outline-try-full'>Попробовать сейчас</button>
                    </Link>
                </div>
            </Col>
        </Row>
    </Container>
);

export default Total;