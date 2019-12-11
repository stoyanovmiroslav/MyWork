import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from "react-router-dom";

import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import employeeService from '../../../services/employeeService';
import userService from '../../../services/userService';

const EditEmployee = ({ match }) => {
  const employeeId = match.params.employeeId;
  const history = useHistory();
  const [employee, setEmployee] = useState({});
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    employeeService.getById(employeeId).then((data) => setEmployee(data.data[0]));
  }, [employeeId]);

  if (!userService.isAuth()) {
    return <Redirect to='/login' />
  }

  const handleSubmit = event => {
    debugger;
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    employeeService.postEdit(employeeId, form.elements.name.value, form.elements.position.value, form.elements.manager.value, form.elements.phone.value, form.elements.hireDate.value)
      .then((userData) => {
        history.push('/employee/all');
      });
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h1 className="text-center mt-3">Edit Employee</h1>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control name="name" placeholder="Name" defaultValue={employee.name} minLength="5" required />
              <Form.Control.Feedback type="invalid">Full Name should be at the least 5 symbols!</Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Position</Form.Label>
              <Form.Control name="position" placeholder="Position" defaultValue={employee.position} minLength="5" required />
              <Form.Control.Feedback type="invalid">Position should be at the least 5 symbols!</Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Manager</Form.Label>
              <Form.Control name="manager" placeholder="Manager" defaultValue={employee.manager} minLength="5" required />
              <Form.Control.Feedback type="invalid">Manager should be at the least 5 symbols!</Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Phone number</Form.Label>
              <Form.Control name="phone" placeholder="0888888888" defaultValue={employee.phone} type="tel" required />
              <Form.Control.Feedback type="invalid">Phone number is required!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Hire Date</Form.Label>
              <Form.Control name="hireDate" type="date" defaultValue={employee.hireDate} required/>
              <Form.Control.Feedback type="invalid">Hire Date is required!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="text-center" id="formGridButton">
              <Button className="mt-3" variant="primary" type="submit">Edit</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default EditEmployee