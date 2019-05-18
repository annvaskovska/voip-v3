import React from 'react';

import { Link } from 'react-router-dom'

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
                    <Nav className="d-flex justify-content-end">
                        <Nav.Link>
                            <Link className='voip-nav-link' to='/'>О нас</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='voip-nav-link' to='products'>Продукты</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='voip-nav-link' to='prices'>Стоимость звонков</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='voip-nav-link' to='contact'>Контакты</Link>
                        </Nav.Link>
                        <button type='button' className='btn-outline-try'>Купить</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        ]
    }
};

export default Navigation;