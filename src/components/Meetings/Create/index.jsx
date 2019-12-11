import React, { useState } from 'react';
import { Redirect, useHistory } from "react-router-dom";

import { Form, Col, Button, Container, Row } from 'react-bootstrap';
import meetingService from '../../../services/meetingService'
import userService from '../../../services/userService'

function CreateMeeting() {
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

        meetingService.create(form.elements.name.value, form.elements.description.value, form.elements.location.value, form.elements.startDate.value,
            form.elements.endDate.value, form.elements.startTime.value, form.elements.endTime.value, "newEmployee")
            .then((userData) => {
                history.push('/meetings');
            });
    };

    return (
        <Container className='pl-0'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h1 className="text-center mt-3">Create Meeting</h1>
                <Form.Row  >
                    <Col md={{ span: 8, offset: 2 }}>
                        <Form.Group controlId="formGridName" >
                            <Form.Label>Name:</Form.Label>
                            <Form.Control name="name" placeholder="Name" required minLength='3' />
                            <Form.Control.Feedback type="invalid">Name should be at the least 3 symbols!</Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formGridDescription">
                            <Form.Label>Description:</Form.Label>
                            <Form.Control as="textarea" rows="3" name="description" placeholder="Description" required minLength='5' />
                            <Form.Control.Feedback type="invalid">Description should be at the least 5 symbols!</Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formGridLocation">
                            <Form.Label>Location:</Form.Label>
                            <Form.Control name="location" placeholder="Location" required minLength='5' />
                            <Form.Control.Feedback type="invalid">Location should be at the least 5 symbols!</Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group controlId="formGridStartDate">
                                    <Form.Label>Start time:</Form.Label>
                                    <Form.Control name="startDate" type="date" required />
                                    <Form.Control.Feedback type="invalid">Start date is required!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formGridEndDate">
                                    <Form.Label>End time:</Form.Label>
                                    <Form.Control name="endDate" type="date" required />
                                    <Form.Control.Feedback type="invalid">End date is required!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formGridStartTime">
                                    <Form.Control name="startTime" type="time" required />
                                    <Form.Control.Feedback type="invalid">Start time is required!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formGridEndTime">
                                    <Form.Control name="endTime" type="time" required />
                                    <Form.Control.Feedback type="invalid">End time is required!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                </Form.Row>
                <Form.Group className="text-center" id="formGridButton">
                    <Button className="text-center" variant="primary" type="submit">Create</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default CreateMeeting