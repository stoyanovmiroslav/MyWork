import React, { Component } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

export class Register extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 7, offset: 3 }}>
          <Form>
          <h1 className="text-center mt-3">Register</h1>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>
            <Form.Group className="text-center" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
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