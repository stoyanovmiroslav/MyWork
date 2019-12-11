import React, { Component } from 'react';
import * as yup from 'yup';

import { Form, Row, Col, Button, Container, Alert } from 'react-bootstrap';
import withForm from '../Shared/hocs/withForm';
import userService from '../../services/userService';

class Login extends Component {
  state = {
    serverErrors: undefined
  };

  usernameOnChangeHandler = this.props.controlChangeHandlerFactory('username');
  passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');

  submitHandler = () => {
    this.props.runValidations()
    const errors = this.props.getFormErrorState();
    if (!!errors) { return; }
    const data = this.props.getFormState();

    userService.login(data.username, data.password)
      .then((userData) => {
        userService.saveSession(userData.data);
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ serverError: "Invalid username or password!" })
      })
  };

  getFirstControlError = name => {
    const errorState = this.props.getFormErrorState();
    return errorState && errorState[name] && errorState[name][0];
  };

  render() {
    const usernameError = this.getFirstControlError('username');
    const passwordError = this.getFirstControlError('password');

    return (
      <Container>
        <Row>
          <Col md={{ span: 7, offset: 3 }}>
            <h1 className="text-center mt-3">Login</h1>
            {this.state.serverError && <Alert variant="danger text-center">{this.state.serverError}</Alert>}
            <Form>
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
};

const schema = yup.object({
  username: yup.string('Username shoud be a string')
    .required('Username is required')
    .min(4, 'Username should be more than 4 chars'),

  password: yup.string('Password must be a string')
    .required('Password is required')
    .min(6, 'Password must be more than 6 chars'),
});

export default withForm(Login, initialFormState, schema)