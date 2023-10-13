// src/components/Footer.js
import React from 'react';
import './footer.css';
import youtube from '../assets/images/Youtube.png';
import insta from '../assets/images/Instagram.png';
import facebook from '../assets/images/Facebook.png';
import twitter from '../assets/images/Twitter.png';
import logo from '../assets/images/logo.svg'
import { Navbar, Nav, Container, Row, Col,Image } from 'react-bootstrap';
const Footer = () => {
  return (
    <>
    <Navbar className='footercss' >
    <Container >
      <Row className="justify-content-center">
        <Col className="text-center">
        <Nav>
            <Nav.Link className='navtext' href="/terms">Home</Nav.Link>
            <Nav.Link className='navtext' href="/privacy">Category</Nav.Link>
            <Nav.Link className='navtext' href="/terms">About</Nav.Link>
            <Nav.Link className='navtext' href="/privacy">Contact</Nav.Link>
          </Nav>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-center">
          <Nav>
            <Nav.Link  href="/terms"><Image src={facebook} className='imgcss'/></Nav.Link>
            <Nav.Link className='imgcss' href="/privacy"><Image src={twitter} className='imgcss'/></Nav.Link>
            <Nav.Link className='imgcss' href="/terms"><Image src={insta} className='imgcss'/></Nav.Link>
            <Nav.Link className='imgcss' href="/privacy"><Image src={youtube} className='imgcss'/></Nav.Link>
          </Nav>
        </Col>
        
      </Row>
    </Container>
    
  </Navbar>
  <Navbar className='footercss'>
    <Container style={{borderTop:'1px solid rgba(204, 209, 210, 1)'}}>
      <Row className="justify-content-center mt-3">
        <Col className="text-center">
          <Navbar.Text className='navtext'>
            © {new Date().getFullYear()} arplo. All rights reserved.
          </Navbar.Text>
        </Col>
      </Row>
      <Row className='mt-3'>
      <Image src={logo} className='imgcss1'/>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col className="text-center">
          <Nav>
            <Nav.Link className='navtext' href="/terms">Term of use</Nav.Link>
            <Nav.Link className='navtext' href="/privacy">Privacy Policy</Nav.Link>
          </Nav>
        </Col>
        
      </Row>
    </Container>
    
  </Navbar>

  <Navbar className='footercss' >
    <Container >
      <Row className="justify-content-center">
        <Col >
        <p>Lorem ipsum dolor sit amet consectetur. Erat aliquet adipiscing orci id diam. Sed malesuada semper pellentesque etiam habitant sollicitudin. Habitasse tristique varius at faucibus senectus lacus sed cras feugiat. Orci scelerisque orci vel dictumst elementum. Leo faucibus nulla lectus leo tempus sapien. Quam sed nunc quis nulla. Massa suspendisse nisl et netus neque vitae. Dui augue scelerisque ac auctor. Diam pellentesque elit odio elementum est vel bibendum at curabitur. Morbi et ipsum ante quis sapien sed. </p>
        </Col>
      </Row>
     
    </Container>
    
  </Navbar>
  </>
  );
};

export default Footer;
