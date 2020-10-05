import React from 'react';
import './Header.css';
import logo from '../../images/logos/Group 1329.png';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className="top">
        <Navbar.Brand className=" navbar">
            <Link to="/" className='text-white logo'><img className="logo" src={logo} alt="" /></Link>
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-end menu" activeKey="/home">
            <Nav.Item>
                <Link to="/" className="menu">Home</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/donation" className="menu">Donation</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/events" className="menu">Events</Link>
            </Nav.Item>
            <Nav.Item>
                <Link yo="/blog" className="menu">Blog</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/ragister" className="menu btn btn-primary text-light">Ragister</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/admin" className="menu btn btn-secondary text-light">Admin</Link>
            </Nav.Item>
        </Navbar.Collapse>
    </Navbar>
    );
};

export default Header;