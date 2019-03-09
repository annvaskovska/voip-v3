import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './styles.css';

const Navigation = () => (
    <Navbar expand="lg" className='voip-nav'>
        <Navbar.Brand href="#home">
            <span className='voip'>VOIP</span>
            <span className='plus'>PLUS</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex justify-content-end">
                <Nav.Link className='voip-nav-link' href="#home">О нас</Nav.Link>
                <Nav.Link className='voip-nav-link' href="#link">Продукты</Nav.Link>
                <Nav.Link className='voip-nav-link' href="#link">Стоимость звонков</Nav.Link>
                <Nav.Link className='voip-nav-link' href="#link">Контакты</Nav.Link>
                <button type='button' className='btn-outline-try btn-outline-try'>Купить</button>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
;

export default Navigation;