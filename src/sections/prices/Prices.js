import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './slyles.css';

const renderRow = ({ name, price }) => (
    <Row className='results-row'>
        <Col md={{ span: 4 }}>
            <div className='cell-regular-title'>
                Количество внешних линий
            </div>
        </Col>
        <Col md={{ span: 2 }}>
            <div className='m-auto d-flex justify-content-center align-items-center'>
                $ 0.04
            </div>
        </Col>
    </Row>
);

const Prices = () => {
    const rows = [
        { name: 'Ukraine', price: '$0.04'},
        { name: 'Ukraine', price: '$0.02'},
        { name: 'Ukraine', price: '$0.06'},
        { name: 'Ukraine', price: '$0.07'},
    ];

    return (
        <Container fluid='true' className='prices'>
            <Row className='title d-flex align-items-center'>
                <Col md={{ span: 8, offset: 2 }}>Тарифы на международные звонки</Col>
            </Row>
            <Row className='input-field'>
                <Col md={{ span: 6, offset: 2 }}>
                    <input
                        placeholder={'Введите страну или код страны'}
                        className='prices-input'
                    />
                </Col>
                <Col md={{ span: 2 }}>
                    <button type='button' className='btn-outline-prices'>Найти</button>
                </Col>
            </Row>
            <Container className='results-container'>
                { rows.map(renderRow)}
            </Container>
        </Container>
    );
};

export default Prices;