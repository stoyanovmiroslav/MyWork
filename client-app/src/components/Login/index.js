import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export class Login extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 7, offset: 3 }}>
            <h1 className="text-center mt-3">Login</h1>
            <Form>
              <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="text-center" id="formGridButton">
                <Button className="text-center" variant="primary" type="submit">Submit</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}