import React from 'react';

import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './styles.css';

class Navigation extends React.Component {
    render() {
        return [
            <Navbar expand="lg" className='voip-nav'>
                <Link className='voip-nav-link' to='/'>
                    <span className='voip'>VOIP</span>
                    <span className='plus'>PLUS</span>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex justify-content-end">
                        <Link className='voip-nav-link' to='/' key='/'>О нас</Link>
                        {/*<Nav.Link>*/}
                            {/*<Link className='voip-nav-link' to='products'>Продукты</Link>*/}
                        {/*</Nav.Link>*/}
                        <Link className='voip-nav-link' to='prices' key='prices'>Стоимость звонков</Link>
                        <Link className='voip-nav-link' to='contact' key='contact'>Контакты</Link>
                        <button type='button' className='btn-outline-try' key='buy'>
                            <Link className='buy-btn' to='buy-step-1'>Купить</Link>
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        ]
    }
};

export default Navigation;