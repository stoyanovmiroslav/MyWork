import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import employeeService from '../../../services/employeeService'
import { Form, Row, Col, Container, Button } from 'react-bootstrap';

const EditEmployee = ({ match }) => {

  const employeeId = match.params.employeeId;
  const history = useHistory();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    employeeService.getById(employeeId).then((data) => setEmployee(data.data[0]));
  }, [employeeId]);

  function submitHandler() {
    employeeService.postEdit(employeeId, employee.name, employee.position, employee.manager, employee.phone)
    .then((userData) => {
      history.push('/employee/all');
    });
  }

  function usernameChange(){

  }
  
  return (
    <Container>
      <Row>
        <Col md={{ span: 9, offset: 2 }}>
          <h2 className="text-center mt-3">Employee Details</h2>
          <Form>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control name="name" placeholder="Name" value={employee.name} onChange={usernameChange} />
            </Form.Group>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Position</Form.Label>
              <Form.Control name="position" value={employee.position} />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Manager</Form.Label>
              <Form.Control name="manager" value={employee.manager} />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Phone number</Form.Label>
              <Form.Control name="phone" value={employee.phone} />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Hire Date</Form.Label>
              <Form.Control name="hireDate" value={employee.hireDate} />
            </Form.Group>
            <Form.Group className="text-center" id="formGridButton">
              <Button className="mt-3" variant="primary" type="button" onClick={submitHandler}>Edit</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default EditEmployee