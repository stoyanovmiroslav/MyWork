/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import * as yup from 'yup';

import { Form, Row, Col, Button, Container, Alert } from 'react-bootstrap';
import withForm from '../../shared/hocs/withForm';
import employeeService from '../../../services/employeeService'

class CreateEmploee extends Component {
  constructor(props){
    super(props);

    this.state = {
      serverErrors: undefined
    };
  }

  nameOnChangeHandler = this.props.controlChangeHandlerFactory('name');
  positionOnChangeHandler = this.props.controlChangeHandlerFactory('position');
  managerOnChangeHandler = this.props.controlChangeHandlerFactory('manager');
  phoneOnChangeHandler = this.props.controlChangeHandlerFactory('phone');

  submitHandler = () => {
    this.props.runValidations()
    const errors = this.props.getFormErrorState();
    if (!!errors) { return; }
    const data = this.props.getFormState();

    employeeService.create(data.name, data.position, data.manager, data.phone)
      .then((userData) => {
        //notify.showInfo('User registration successful.');
        // go to all employee
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ serverError: "Username already exists!" })
      })
  };

  getFirstControlError = name => {
    const errorState = this.props.getFormErrorState();
    return errorState && errorState[name] && errorState[name][0];
  };

  render() {
    const nameError = this.getFirstControlError('name');
    const positionError = this.getFirstControlError('position');
    const managerError = this.getFirstControlError('manager');
    const phoneError = this.getFirstControlError('phone');

    return (
      <Container>
        <Row>
          <Col md={{ span: 7, offset: 3 }}>
            <Form onSubmit={this.handleSubmit}>
              <h1 className="text-center mt-3">Create Employee</h1>
              {this.state.serverError && <Alert variant="danger">{this.state.serverError}</Alert>}

              <Form.Group controlId="formGridEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control name="name" placeholder="Name" onChange={this.nameOnChangeHandler} required />
                {nameError && <div className="error">{nameError}</div>}
              </Form.Group>

              <Form.Group controlId="formGridPassword">
                <Form.Label>Position</Form.Label>
                <Form.Control name="position" placeholder="position" onChange={this.positionOnChangeHandler} required />
                {positionError && <div className="error">{positionError}</div>}
              </Form.Group>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Manager</Form.Label>
                <Form.Control name="manager" placeholder="Manager" onChange={this.managerOnChangeHandler} required />
                {managerError && <div className="error">{managerError}</div>}
              </Form.Group>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Phone number</Form.Label>
                <Form.Control name="phone" placeholder="0887......" onChange={this.phoneOnChangeHandler} required />
                {phoneError && <div className="error">{phoneError}</div>}
              </Form.Group>

              <Form.Group className="text-center" id="formGridButton">
                <Button className="text-center" variant="primary" type="button" onClick={this.submitHandler}>Submit</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

const initialFormState = {
    name: '',
    position: '',
    phone: '',
    manager: ''
};

const schema = yup.object({
    name: yup.string('Name shoud be a string')
    .required('Full Name is required')
    .min(4, 'Full Name should be more than 4 chars'),

    position: yup.string('Position must be a string')
    .required('Position is required'),

    phone: yup.string('Phone number is required')
    .required('Phone number is required'),

     manager: yup.string('Manager name is required')
     .required('Manager name is required')
});

export default withForm(CreateEmploee, initialFormState, schema)