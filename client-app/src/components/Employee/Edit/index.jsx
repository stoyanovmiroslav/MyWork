import React, { useEffect, useState } from 'react';
import { useHistory, Redirect } from "react-router-dom";

import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import employeeService from '../../../services/employeeService'
import userService from '../../../services/userService'

const EditEmployee = ({ match }) => {

  const employeeId = match.params.employeeId;
  const history = useHistory();
  const [employee, setEmployee] = useState({});
  useEffect(() => {
    employeeService.getById(employeeId).then((data) => setEmployee(data.data[0]));
  }, [employeeId]);

  if (!userService.isAuth()) {
    return <Redirect to='/login' />
  }

  function submitHandler() {
    employeeService.postEdit(employeeId, employee.name, employee.position, employee.manager, employee.phone, employee.hireDate)
    .then((userData) => {
      history.push('/employee/all');
    });
  }

  function UpdateState(event){
    setEmployee({
      ...employee, [event.target.name]: event.target.value
    });
  }
  
  return (
    <Container>
      <Row>
        <Col md={{ span: 9, offset: 2 }}>
          <h2 className="text-center mt-3">Employee Details</h2>
          <Form>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control name="name" placeholder="Name" defaultValue={employee.name} onChange={UpdateState} />
            </Form.Group>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Position</Form.Label>
              <Form.Control name="position" placeholder="Position" defaultValue={employee.position} onChange={UpdateState}  />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Manager</Form.Label>
              <Form.Control name="manager" placeholder="Manager" defaultValue={employee.manager} onChange={UpdateState}  />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Phone number</Form.Label>
              <Form.Control name="phone" type="tel" placeholder="0888888888" defaultValue={employee.phone} onChange={UpdateState}  />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Hire Date</Form.Label>
              <Form.Control name="hireDate" type="date" defaultValue={employee.hireDate} onChange={UpdateState}  />
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