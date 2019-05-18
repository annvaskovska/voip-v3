import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';

const Title = () => (
    <Container fluid='true' className='title-container'>
        <Row>
            <Col md={{ span: 12 }} className='title-text m-auto d-flex justify-content-center align-items-center'>
                Пакеты услуг
            </Col>
        </Row>
    </Container>
);

export default Title;