// src/components/Header.js
import React,{useState} from 'react';
import { Navbar, Nav,Image } from 'react-bootstrap';
import './header.css';
import logo from '../assets/images/logo.svg'

const Header = ({ activeTab, onTabChange }) => {

  const [activeLink, setActiveLink] = useState('home');

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar  className="headercss justify-content-between">
      <Navbar.Brand href="#home"><Image src={logo}/></Navbar.Brand>
      <Nav className="mr-30">
        <Nav.Link href="#home" active={activeTab === 'home'} onClick={() => onTabChange('home')}
        className={activeTab === 'home' ? 'active-link' : 'not-active'}
        >
          Home
        </Nav.Link>
        <Nav.Link
          href="#about"
          active={activeTab === 'about'}
          onClick={() => onTabChange('about')}
          className={activeTab === 'about' ? 'active-link' : 'not-active'}
        >
          About us
        </Nav.Link>
        <Nav.Link
          href="#faq"
          active={activeTab === 'faq'}
          onClick={() => onTabChange('faq')}
          className={activeTab === 'faq' ? 'active-link' : 'not-active'}
        >
          FAQ
        </Nav.Link>
        <Nav.Link
          href="#contact"
          active={activeTab === 'contact'}
          onClick={() => onTabChange('contact')}
          className={activeTab === 'contact' ? 'active-link' : 'not-active'}
        >
          Contact Us
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
