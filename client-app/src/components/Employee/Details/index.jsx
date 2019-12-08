import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import employeeService from '../../../services/employeeService'
import { Form, Row, Col, Container, Button } from 'react-bootstrap';

const DetailsEmployee = ({ match }) => {

  const employeeId = match.params.employeeId;
  const history = useHistory();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    employeeService.getById(employeeId).then((data) => setEmployee(data.data[0]));
  }, [employeeId]);

  function goBack() {
    history.push('/employee/all');
  }

  return (
    <Container>
      <Row>
        <Col md={{ span: 9, offset: 2 }}>
          <h2 className="text-center mt-3">Employee Details</h2>
          <Form>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control name="name" placeholder="Name" value={employee.name} disabled />
            </Form.Group>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Position</Form.Label>
              <Form.Control name="position" value={employee.position} disabled />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Manager</Form.Label>
              <Form.Control name="manager" value={employee.manager} disabled />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Phone number</Form.Label>
              <Form.Control name="phone" value={employee.phone} disabled />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Hire Date</Form.Label>
              <Form.Control name="hireDate" value={employee.hireDate} disabled />
            </Form.Group>
            <Form.Group className="" id="formGridButton">
              <Button className="mt-3" variant="primary" type="button" onClick={goBack} size="sm">Go Back</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default DetailsEmployee