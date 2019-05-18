import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './styles.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(k) {
        const { select } = this.props;
        select(k);
    }

    render() {
        return [
            <Navbar expand="lg" className='voip-nav'>
                <Navbar.Brand href="#home">
                    <span className='voip'>VOIP</span>
                    <span className='plus'>PLUS</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex justify-content-end" onSelect={k => this.handleSelect(k)}>
                        <Nav.Link className='voip-nav-link' eventKey="1">О нас</Nav.Link>
                        <Nav.Link className='voip-nav-link' eventKey="2">Продукты</Nav.Link>
                        <Nav.Link className='voip-nav-link' eventKey="3">Стоимость звонков</Nav.Link>
                        <Nav.Link className='voip-nav-link' href="#link" eventKey="4">Контакты</Nav.Link>
                        <button type='button' className='btn-outline-try btn-outline-try'>Купить</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        ]
    }
};

export default Navigation;