import React, { useState } from 'react';
import { Redirect, useHistory } from "react-router-dom";

import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import employeeService from '../../../services/employeeService'
import userService from '../../../services/userService'

function CreateEmploee() {
  const [validated, setValidated] = useState(false);
  const history = useHistory();

  if (!userService.isAuth()) {
    return <Redirect to='/login' />
  }

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    employeeService.create(form.elements.name.value, form.elements.position.value, form.elements.manager.value, form.elements.phone.value)
      .then((userData) => {
        history.push('/employee/all');
      });
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h1 className="text-center mt-3">Create Employee</h1>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control name="name" placeholder="Name" minLength="5" required />
              <Form.Control.Feedback type="invalid">Full Name should be at the least 5 symbols!</Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Position</Form.Label>
              <Form.Control name="position" placeholder="Position" minLength="5" required />
              <Form.Control.Feedback type="invalid">Position should be at the least 5 symbols!</Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Manager</Form.Label>
              <Form.Control name="manager" placeholder="Manager" minLength="5"  required />
              <Form.Control.Feedback type="invalid">Manager should be at the least 5 symbols!</Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Phone number</Form.Label>
              <Form.Control name="phone" placeholder="0888888888" type="tel" required />
              <Form.Control.Feedback type="invalid">Phone number is required!</Form.Control.Feedback>
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

export default CreateEmploee