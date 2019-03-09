import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './styles.css';

const Navigation = () => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">VOIPPLUS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex justify-content-end">
                <Nav.Link className='p-2' href="#home">О нас</Nav.Link>
                <Nav.Link className='p-2' href="#link">Продукты</Nav.Link>
                <Nav.Link className='p-2' href="#link">Стоимость звонков</Nav.Link>
                <Nav.Link className='p-2' href="#link">Контакты</Nav.Link>
                <Button variant="outline-success">Купить</Button>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
;

export default Navigation;