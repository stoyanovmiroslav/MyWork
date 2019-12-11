import React, { useEffect, useState } from 'react';
import { useHistory, Redirect } from "react-router-dom";

import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import employeeService from '../../../services/employeeService'
import userService from '../../../services/userService'

const DetailsEmployee = ({ match }) => {

  const employeeId = match.params.employeeId;
  const history = useHistory();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    employeeService.getById(employeeId).then((res) => {
      const currentEmployee = res.data[0];

      if (res.data.length === 0) {
        history.push('/notFound');
      }

      setEmployee(currentEmployee)
    });
  }, [employeeId, history]);

  if (!userService.isAuth()) {
    return <Redirect to='/login' />
  }

  function goBack() {
    history.push('/employee/all');
  }

  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h2 className="text-center mt-3">Employee Details</h2>
          <Form>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control name="name" placeholder="Full Name" value={employee.name} disabled />
            </Form.Group>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Position</Form.Label>
              <Form.Control name="position" placeholder="Position" value={employee.position} disabled />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Manager</Form.Label>
              <Form.Control name="manager" placeholder="Manager" value={employee.manager} disabled />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Phone number</Form.Label>
              <Form.Control name="phone" placeholder="Phone number" value={employee.phone} disabled />
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