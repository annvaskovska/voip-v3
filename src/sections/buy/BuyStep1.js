import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WeOffer from '../home/we-offer/WeOffer';
import Total from '../home/total/Total';
import './styles.css';

class BuyStep1 extends React.Component {
    render() {
        return (
            <Container className='buy-step-1'>
                <Row className='buy-step-1-step'>
                    <Col>
                        Шаг 1 из 3
                    </Col>
                </Row>
                <Row>
                    <Col className='title'>
                        Выберите тарифный план, который подходит для вас
                    </Col>
                </Row>
                <WeOffer />
                <Total/>
            </Container>
        )
    }
}

export default BuyStep1;