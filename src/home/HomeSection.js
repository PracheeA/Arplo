// src/components/HomeSection.js
import React, { useState } from 'react';
import { Card, Row, Col, Image, Accordion, Button, Form } from 'react-bootstrap';
import user from '../assets/images/user.svg'
import office from '../assets/images/office.svg'
import apple from '../assets/images/apple.svg'
import google from '../assets/images/google.svg'
import explore from '../assets/images/explore.svg'
import question from '../assets/images/question.svg'
import ask from '../assets/images/ask.svg'
import faq from '../assets/images/faq.svg'
import './home.css';
import edit from '../assets/images/edit.svg'
import view from '../assets/images/view.svg'
import submit from '../assets/images/submit.svg'
import contactus from '../assets/images/contactus.svg'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
const HomeSection = () => {

  const data = [
    {
      id: 1,
      question: 'What are your customer service hours?',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet convallis consequat. Cras ut urna velit. Curabitur viverra facilisis bibendum. Sed magna lectus, iaculis eu cursus non, dictum facilisis leo. In porttitor id ante non semper. Sed eros neque, semper id mi eu, ullamcorper feugiat arcu. Sed leo eros, faucibus id nisl eget, interdum sodales justo. Sed elementum dui nec nibh vulputate mattis. Nullam sed risus non massa sollicitudin aliquet vel quis nulla. In eget nulla a eros luctus porta. Mauris condimentum leo a elit fringilla rutrum."
    },
    {
      id: 2,
      question: 'How can I contact customer service for assistance?',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet convallis consequat. Cras ut urna velit. Curabitur viverra facilisis bibendum. Sed magna lectus, iaculis eu cursus non, dictum facilisis leo. In porttitor id ante non semper. Sed eros neque, semper id mi eu, ullamcorper feugiat arcu. Sed leo eros, faucibus id nisl eget, interdum sodales justo. Sed elementum dui nec nibh vulputate mattis. Nullam sed risus non massa sollicitudin aliquet vel quis nulla. In eget nulla a eros luctus porta. Mauris condimentum leo a elit fringilla rutrum."
    },
    {
      id: 3,
      question: 'What are your customer service hours?',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet convallis consequat. Cras ut urna velit. Curabitur viverra facilisis bibendum. Sed magna lectus, iaculis eu cursus non, dictum facilisis leo. In porttitor id ante non semper. Sed eros neque, semper id mi eu, ullamcorper feugiat arcu. Sed leo eros, faucibus id nisl eget, interdum sodales justo. Sed elementum dui nec nibh vulputate mattis. Nullam sed risus non massa sollicitudin aliquet vel quis nulla. In eget nulla a eros luctus porta. Mauris condimentum leo a elit fringilla rutrum."
    },
    {
      id: 4,
      question: 'What are your customer service hours?',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet convallis consequat. Cras ut urna velit. Curabitur viverra facilisis bibendum. Sed magna lectus, iaculis eu cursus non, dictum facilisis leo. In porttitor id ante non semper. Sed eros neque, semper id mi eu, ullamcorper feugiat arcu. Sed leo eros, faucibus id nisl eget, interdum sodales justo. Sed elementum dui nec nibh vulputate mattis. Nullam sed risus non massa sollicitudin aliquet vel quis nulla. In eget nulla a eros luctus porta. Mauris condimentum leo a elit fringilla rutrum."
    }
  ]

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

  const handleNameChange = (event) => {
    const inputMessage = event.target.value;

    setFirstName(inputMessage);

    if (errors.firstName) {
      const updatedErrors = { ...errors };

      delete updatedErrors.firstName;

      setErrors(updatedErrors);
    }
  };

  

  let contactvalue = {
    "data": {
      "title": "",
      "email": "",
      "description": ""
    },
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};

    if (!isEmailValid(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!firstName) {
      validationErrors.firstName = "Please enter a name.";
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
      setFirstName("")

      contactvalue.data.title = firstName;
      contactvalue.data.description = message;
      contactvalue.data.email = email;

      let config = {
        method: "POST",
        url: 'https://summer-scene-41622.botics.co/contactus/api/v1/create-contact-us/',
        headers: {
          'Content-Type': 'application/json',
        },
        data: contactvalue.data
      }
      axios
        .request(config)
        .then(response => {

          toast.success('Respons saved successfully', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            hideProgressBar: true,
          });

        })
        .catch(error => {
          toast.error('Error while saving data ', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            hideProgressBar: true,
          });
        })
    }


    setErrors({});
  };
  return (
    <div>

      <Row className="my-3 mx-5 cardcss p-3">
        <Col md={7} className='sectioncss'>
          <Card.Title className='mainheder'>
            Ensuring Progress and
            Personalized Care
            for Patients!</Card.Title>
          <Card.Text style={{ borderBottom: '1px solid rgba(197, 197, 197, 1)', width: 470, paddingTop: 20, paddingBottom: 20 }}>
            <span className='textcss'>Operates seamlessly on everyday mobile devices,</span>
            <span className='textcss1'> delivering accurate measurements through an
              advanced,tailor-made AI system designed
              for the digital health sector.</span></Card.Text>
          <Card.Text>
            <span className='textcss1'> Download <span style={{ color: 'rgba(85, 105, 200, 1)' }}>arplo</span> mobile app now.</span><br></br>
            <span>
              <Image src={apple} alt="Card" className="hmimgcss" />
              <Image src={google} alt="Card" className="hmimgcss" />
            </span>
          </Card.Text>

        </Col>
        <Col md={5}>
          <Image src={user} alt="Card" className="img-user" />
        </Col>
      </Row>


      <Row className="my-3 mx-5">

        <Col md={5}>
          <Image src={office} alt="Card" className="img-fluid" />
        </Col>
        <Col md={7}>
          <Card.Title className='mainheder'>Who we are?</Card.Title>
          <Card.Text className='textcss1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet condimentum vulputate. Praesent tincidunt ultricies enim.
            Mauris imperdiet ligula ornare, dignissim augue sollicitudin, finibus mi. Sed placerat odio vel massa aliquam, eleifend commodo lacus aliquam. Nullam commodo dignissim turpis vel fringilla. </Card.Text>
          <Image src={explore} alt="Card" className="qimgcss" />
        </Col>
      </Row>
      <Card className='my-3 mx-5 cardcss2 p-4'>
        <Row>
          <Col md={9} >
            <Card.Text className='qcss'>Have more questions?</Card.Text>
          </Col>
          <Col md={3} >
            <Image src={ask} alt="Card" className="qimgcss" />
          </Col>
        </Row>

      </Card>
      <Col className='faq'>
        <Card.Text > <Image src={faq} alt="Card" className="faqcss" /></Card.Text>
      </Col>
      {/* <Col className='faqtext'>
        <Card.Text>Commodo dignissim turpis vel fringilla. Suspendisse semper molestie ultricies. Phasellus
          faucibus id est eu commodo. Etiam pharetra ligula a justo elementum, in ultricies erat varius.</Card.Text>
      </Col> */}
      <Col className='my-3 mx-5 '>
        <Accordion defaultActiveKey="0">
          {data.map((item) =>
            <Accordion.Item className="my-5 faq-item" eventKey={item.id}>
              <Accordion.Header className='qescss'><Image src={edit} alt="Card" style={{ height: 15, marginRight: 10 }} />{item.question}</Accordion.Header>
              <Accordion.Body className='textcss1'>{item.description}
              </Accordion.Body>
            </Accordion.Item>
          )}

        </Accordion>
        <span className='viewcss'>
          <Image src={view} alt="Card" className="qimgcss" /></span>
      </Col>
      <Col className='faq'>
        <Card.Text > <Image src={contactus} alt="Card" className="contactcss" /></Card.Text>
      </Col>
      <Card className='my-5 mx-5 cardcss3 px-5 py-4'>
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
                    style={{ backgroundColor: "rgba(85, 105, 200, 1)",color:'white' }}
                    type="text"
                    placeholder="Enter your name"
                    value={firstName}
                    onChange={handleNameChange}
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group></Col>
              <Col md={6}>
                <Form.Group controlId="formBasicEmail" >
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
                    style={{ backgroundColor: "rgba(85, 105, 200, 1)",color:'white' }}
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

export default HomeSection;
