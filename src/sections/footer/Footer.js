import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';

class Footer extends React.Component {
    render() {

        return (
            <Container fluid='true' className='footer-container'>
                <div className='inner-wrapper'>
                    <Row>
                        <Col md={{ span: 2 }} className='footer-col m-auto d-flex justify-content-center align-items-center'>
                            О нас
                        </Col>
                        <Col md={{ span: 2 }} className='footer-col m-auto d-flex justify-content-center align-items-center'>
                            FAQ
                        </Col>
                        <Col md={{ span: 2 }} className='footer-col m-auto d-flex justify-content-center align-items-center'>
                            Стоимость звонков
                        </Col>
                        <Col md={{ span: 2 }} className='footer-col m-auto d-flex justify-content-center align-items-center'>

                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col md={{ span: 12 }} className='footer-copy m-auto d-flex justify-content-center align-items-end'>
                        2019 VOIP.PLUS
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;