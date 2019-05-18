import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';

class BuyStep2 extends React.Component {
    constructor(props) {
        super(props);
        let data = localStorage.getItem('voip-total');
        data = (data && JSON.parse(data)) || {};
        this.state = {
            total: data.type === 'Trial' ? 0 : data.total,
            type: data.type || '',
        };
    }

    render() {
        return (
            <Container className='buy-step-2'>
                <Row className='buy-step-1-step'>
                    <Col>
                        Шаг 2 из 3
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col md={{ span: 4, offset: 1 }}>
                        <div className='form d-flex flex-column'>
                            <div className='buy-step-2-header d-flex justify-content-start'>
                                Создайте аккаунт и воспользуйтесь всеми прееимуществами современной телефонии!
                            </div>
                            <input
                                type='text'
                                className='buy-step-2-field d-flex justify-content-start'
                                placeholder='e-mail'
                            />
                            <input
                                type='password'
                                className='buy-step-2-field d-flex justify-content-start'
                                placeholder='password'
                            />
                        </div>
                    </Col>
                    <Col md={{ span: 4 }}>
                        <div className='form d-flex flex-column'>
                            <div className='empty-height-60' />
                            <div className='your-selection'>
                                <div className='your-selection-label'>Ваш тарифный план</div>
                                <div className='your-selection-plan'>
                                    <div className='your-selection-plan-name'>
                                        {this.state.type}
                                    </div>
                                    <div className='your-selection-plan-cost'>
                                        {`$${this.state.total}`}
                                    </div>
                                </div>
                                <div className='your-selection-info'>
                                    Эффективная телефония для бизнеса
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <button type='button' className='btn-outline-contact-us'>Продолжить</button>
                </Row>
            </Container>
        )
    }
}

export default BuyStep2;