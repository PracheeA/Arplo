// src/components/AboutSection.js
import React, { useState } from 'react';
import { Card, Row, Col, Image, Accordion, Button, Form } from 'react-bootstrap';
import explore from '../assets/images/explore.svg'
import office from '../assets/images/office.svg'
import about from '../assets/images/about.svg'
import arrow from '../assets/images/arrow.png'
import aboutus from '../assets/images/aboutus.svg'
import '../home/home.css';
import './about.css';
import contactus from '../assets/images/contactus.svg'
const AboutSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");

  const isEmailValid = (inputEmail) => {

    const emailRegex = /^([\w\-]+\.?){0,2}[\w\-]+@[\w.\-]+$/;

    return emailRegex.test(inputEmail);
  };
  const isMessageValid = (message) => {
    return message.trim().length > 8;
  };
  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;

    setEmail(inputEmail);

    if (errors.email && isEmailValid(inputEmail)) {
      const updatedErrors = { ...errors };

      delete updatedErrors.email;

      setErrors(updatedErrors);
    }
  };
  const handleMessageChange = (event) => {
    const inputMessage = event.target.value;

    setMessage(inputMessage);

    if (errors.message && isMessageValid(message)) {
      const updatedErrors = { ...errors };

      delete updatedErrors.message;

      setErrors(updatedErrors);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};

    if (!isEmailValid(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }
    if (!isMessageValid(message)) {
      validationErrors.message =
        "Please enter a valid feedback Message of length greater than 8.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      return;
    }
    if (Object.keys(validationErrors).length === 0) {
      setEmail("");
      setMessage("");
    }


    setErrors({});
  };
  return (
    <div>
      <Row className="my-3 mx-5">

        <Col md={1}>
          <Image src={arrow} alt="Card" className="img-arr" />
        </Col>
        <Col md={6}>
          <Image src={aboutus} alt="Card" className="img-txt" />
        </Col>
      </Row>
      <Row className="my-3 mx-5">

        <Col md={5}>
          <Image src={office} alt="Card" className="img-fluid" />
        </Col>
        <Col md={7}>
          <Card.Title className='mainheder'>Who we are?</Card.Title>
          <Card.Text className='textcss1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet condimentum vulputate. Praesent tincidunt ultricies enim. Mauris imperdiet ligula ornare, dignissim augue sollicitudin, finibus mi. Sed placerat odio vel massa aliquam, eleifend commodo lacus aliquam. Nullam commodo dignissim turpis vel fringilla. Suspendisse semper molestie ultricies. Phasellus faucibus id est eu commodo. Etiam pharetra ligula a justo elementum, in ultricies erat varius.
            <br></br><br></br>
            Commodo dignissim turpis vel fringilla. Suspendisse semper molestie ultricies.
          </Card.Text>
        </Col>
      </Row>

      <Row className="my-5 mx-5">

        <Col md={12}>
          <Image src={about} alt="Card" className="img-fluid" />
        </Col>
      </Row>
      <Col className='faq'>
        <Card.Text > <Image src={contactus} alt="Card" className="contactcss" /></Card.Text>
      </Col>
      <Card className='my-4 mx-5 cardcss3 px-5 py-4'>
        <Col>
          <Card.Text className='contacttxt'>  Get in Touch!</Card.Text>
          <Form className="my-3" onSubmit={handleFormSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group

                  controlId="formBasicFname"
                >
                  <Form.Label className="text-start">
                    Name <span style={{ color: "rgba(255, 0, 0, 1)" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    style={{ backgroundColor: "rgba(85, 105, 200, 1)" }}
                    type="text"
                    placeholder="Enter your name"
                    value={firstName}
                    onChange={handleEmailChange}
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group></Col>
              <Col md={6}>
                <Form.Group controlId="formBasicEmail" className='pt-2'>
                  <Form.Label className="text-start">
                    Email <span style={{ color: "rgba(255, 0, 0, 1)" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    style={{ backgroundColor: "rgba(85, 105, 200, 1)", color: 'rgba(255, 255, 255, 1)' }}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group></Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group
                  controlId="formBasicName"
                >
                  <Form.Label className="text-start">
                    Message <span style={{ color: "rgba(255, 0, 0, 1)" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your message"
                    value={message}
                    as="textarea"
                    rows={4}
                    onChange={handleMessageChange}
                    isInvalid={!!errors.message}
                    style={{ backgroundColor: "rgba(85, 105, 200, 1)" }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col></Row>
            <Form.Group className="mx-4 btnflex">
              <Button
                type="submit"
                className=" btncolor"
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Card>
    </div>
  );
};

export default AboutSection;
