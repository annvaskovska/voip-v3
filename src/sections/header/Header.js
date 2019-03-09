import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';

const Header = () => (
    <Container fluid='true' className='header'>
        <Row className='title d-flex align-items-end'>
            <Col md={{ span: 4, offset: 3 }}>Полный набор инструментов для управления вашей компанией</Col>
        </Row>
        <Row className='divider'>
            <Col md={{ span: 6, offset: 3 }}>________</Col>
        </Row>
        <Row className='description'>
            <Col md={{ span: 2, offset: 3 }}>Организованная бизнес телефония с полным
                контролем всех звонков в компании
                в единой системе
            </Col>
        </Row>
    </Container>
);

export default Header;