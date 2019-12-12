/* eslint-disable no-useless-constructor */
import React, { useState } from 'react';
import { Redirect, useHistory } from "react-router-dom";

import { Form, Row, Col, Button, Container, Alert } from 'react-bootstrap';
import userService from '../../services/userService';


function Register() {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState();
  const history = useHistory();

  if (userService.isAuth()) {
    return <Redirect to='/notFound' />
  }

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    if(form.password.value !== form.repeatPassword.value){
      setError("Password doesn not match repeat password!");
      return;
    }

    userService.register(form.username.value, form.password.value, form.companyName.value)
      .then((userData) => {
        userService.saveSession(userData.data);
        history.push('/');
      })
      .catch((error) => {
        setError("Username already exists!");
      })
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 7, offset: 3 }}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h1 className="text-center mt-3">Register</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group controlId="formGridEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control name="username" placeholder="Username" minLength="5" required />
              <Form.Control.Feedback type="invalid">Username should be at the least 5 symbols!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Password" minLength="5" required />
              <Form.Control.Feedback type="invalid">Password should be at the least 5 symbols!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGridRepeatPassword">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control name="repeatPassword" type="password" placeholder="Repeat Password" minLength="5" required />
              <Form.Control.Feedback type="invalid">Repeat Password should be at the least 5 symbols!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Company Name</Form.Label>
              <Form.Control name="companyName" placeholder="Your Company Ltd." minLength="5" required />
              <Form.Control.Feedback type="invalid">Company Name should be at the least 5 symbols!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="text-center" id="formGridButton">
              <Button className="text-center" variant="primary" type="submit">Submit</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Register