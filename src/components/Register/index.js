/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import {  Redirect  } from "react-router-dom";
import * as yup from 'yup';

import { Form, Row, Col, Button, Container, Alert } from 'react-bootstrap';
import withForm from '../Shared/hocs/withForm';
import userService from '../../services/userService';

class Register extends Component {
  constructor(props){
    super(props);

    this.state = {
      error: undefined
    };
  }

  usernameOnChangeHandler = this.props.controlChangeHandlerFactory('username');
  passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');
  repeatPasswordOnChangeHandler = this.props.controlChangeHandlerFactory('repeatPassword');
  companyNameOnChangeHandler = this.props.controlChangeHandlerFactory('companyName');

  submitHandler = () => {
    this.setState({ error: undefined })
    this.props.runValidations();
    const errors = this.props.getFormErrorState();

    if (!!errors) { return; }
    const data = this.props.getFormState();

    let errorMessage = this.validate(data);
    if(errorMessage){
      this.setState({ error: errorMessage })
      return;
    }

    userService.register(data.username, data.password, data.companyName)
      .then((userData) => {
        userService.saveSession(userData.data);
        //notify.showInfo('User registration successful.');
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ error: "Username already exists!" })
      })
  };

  validate = data => {
    let errorMessage = '';
    if(!data.username || !data.password || !data.companyName){
      errorMessage = "All fiels are required!";
    }else if(data.password !== data.repeatPassword){
      errorMessage = "Password does not match repeat password!";
    }

    return errorMessage;
  };

  getFirstControlError = name => {
    const errorState = this.props.getFormErrorState();
    return errorState && errorState[name] && errorState[name][0];
  };

  render() {
    if (userService.isAuth()) {
      return <Redirect to='/notFound' />
    }

    const usernameError = this.getFirstControlError('username');
    const passwordError = this.getFirstControlError('password');
    const repeatPasswordError = this.getFirstControlError('repeatPassword');
    const companyNameError = this.getFirstControlError('companyName');

    return (
      <Container>
        <Row>
          <Col md={{ span: 7, offset: 3 }}>
            <Form onSubmit={this.handleSubmit}>
              <h1 className="text-center mt-3">Register</h1>
              {this.state.error && <Alert variant="danger">{this.state.error}</Alert>}
              <Form.Group controlId="formGridEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" placeholder="Username" onChange={this.usernameOnChangeHandler} required />
                {usernameError && <div className="error">{usernameError}</div>}
              </Form.Group>
              <Form.Group controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" onChange={this.passwordOnChangeHandler} required />
                {passwordError && <div className="error">{passwordError}</div>}
              </Form.Group>
              <Form.Group controlId="formGridRepeatPassword">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control name="repeatPassword" type="password" placeholder="Repeat Password" onChange={this.repeatPasswordOnChangeHandler} required />
                {repeatPasswordError && <div className="error">{repeatPasswordError}</div>}
              </Form.Group>
              <Form.Group controlId="formGridAddress1">
                <Form.Label>Company Name</Form.Label>
                <Form.Control name="companyName" placeholder="Your Company Ltd." onChange={this.companyNameOnChangeHandler} required />
                {companyNameError && <div className="error">{companyNameError}</div>}
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
  username: '',
  password: '',
  repeatPassword: '',
  companyName: ''
};

const schema = yup.object({
  username: yup.string('Username shoud be a string')
    .required('Username is required')
    .min(4, 'Username should be more than 4 chars'),

  password: yup.string('Password must be a string')
    .required('Password is required')
    .min(6, 'Password must be more than 6 chars'),

  repeatPassword: yup.string('Password must be a string')
    .required('Password is required')
    .min(6, 'Password must be more than 6 chars'),

  companyName: yup.string('Company Name must be a string')
                  .required('Company Name is required')
});


export default withForm(Register, initialFormState, schema)