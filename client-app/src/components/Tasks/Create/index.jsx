/* eslint-disable no-useless-constructor */
import React, { Component, useEffect, useState } from 'react';
import { Redirect, useHistory } from "react-router-dom";
import * as yup from 'yup';

import { Form, Row, Col, Button, Container, Alert } from 'react-bootstrap';
import withForm from '../../shared/hocs/withForm';
import taskService from '../../../services/taskService'
import userService from '../../../services/userService'

function CreateTask() {
  const [validated, setValidated] = useState(false);
  const history = useHistory();
  
  if (!userService.isAuth()) {
    return <Redirect to='/login' />
  }

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    taskService.create(form.elements.name.value, form.elements.description.value, form.elements.points.value, form.elements.deadline.value)
      .then((userData) => {
        history.push('/tasks');
      });
  };

  return (
    <Container className='pl-0'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h1 className="text-center mt-3">Create Task</h1>
        {/* {this.state.serverError && <Alert variant="danger">{this.state.serverError}</Alert>} */}
        <Form.Row>
          <Col>
            <Form.Group controlId="formGridEmail" >
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" placeholder="Name" required minLength='3'/>
              <Form.Control.Feedback type="invalid">Name should be at the least 3 symbols!</Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows="3" name="description" placeholder="Description" required minLength='5' />
              <Form.Control.Feedback type="invalid">Description should be at the least 5 symbols!</Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Points</Form.Label>
              <Form.Control name="points" type='number' placeholder="Points" required min="1" max="5"/>
              <Form.Control.Feedback type="invalid">Points shoud be valid number from 1 to 5!</Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Deadline</Form.Label>
              <Form.Control name="deadline" type="date" placeholder="Deadline" required />
              <Form.Control.Feedback type="invalid">Deadline are required!</Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Group className="text-center" id="formGridButton">
          <Button className="text-center" variant="primary" type="submit">Submit</Button>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default CreateTask