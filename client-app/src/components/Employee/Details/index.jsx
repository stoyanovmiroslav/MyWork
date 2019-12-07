import React, { useEffect, useState } from 'react';

import employeeService from '../../../services/employeeService'
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

const DetailsEmployee = ({ match }) => {

  const employeeId = match.params.employeeId;
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    employeeService.getById(employeeId).then((data) => setEmployee(data.data[0]));
  }, [employeeId]);

  return (
    <Container>
      <Row>
        <Col md={{ span: 9, offset: 2 }}>
          <h2 className="text-center mt-3">{employee.name}</h2>
          <Form>
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
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default DetailsEmployee