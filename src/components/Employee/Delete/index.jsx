import React, { useEffect, useState } from 'react';
import { Redirect  } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import employeeService from '../../../services/employeeService'
import userService from '../../../services/userService'

const DeleteEmployee = ({ match }) => {
  const employeeId = match.params.employeeId;
  const history = useHistory();
  const [employee, setEmployee] = useState({});
  
  useEffect(() => {
    employeeService.getById(employeeId).then((data) => setEmployee(data.data[0]));
  }, [employeeId]);

  if (!userService.isAuth()) {
    return <Redirect to='/login' />
  }

  function deleteEmployee() {
    employeeService.deleteById(employeeId)
      .then((data) => {
        history.push('/employee/all');
      });
  }

  function goBack() {
    history.push('/employee/all');
  }

  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h2 className="text-center mt-3">Are you sure you want to delete this employee?</h2>
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
            <Form.Group className="text-center" id="formGridButton">
              <Button className="text-center mr-3" variant="danger" type="button" onClick={deleteEmployee}>Yes</Button>
              <Button className="text-center" variant="primary" type="button" onClick={goBack}>No</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default DeleteEmployee