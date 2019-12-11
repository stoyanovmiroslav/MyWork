import React, { Component } from 'react';

import { Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import { Link  } from "react-router-dom";

import { MdEdit } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { GoLocation } from "react-icons/go";

import './style.css';

import meetingService from '../../services/meetingService';

class MeetingCard extends Component {

    deleteCard = (event) => {
        meetingService.deleteById(this.props.meeting._id).then(data => {
            this.props.refresh();
        });
    }

    render() {
        return (
            <Card className="ml-4 mb-4" style={{ width: '16rem' }}>
                <Card.Body className='m-height'>
                    <Row>
                        <Col sm={10}><Card.Title>{this.props.meeting.name}</Card.Title></Col>
                        <Col sm={2}><TiDeleteOutline size={21} className="meeting-pointer" onClick={this.deleteCard} /></Col>
                    </Row>
                    <Card.Text>{this.props.meeting.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><strong>Start:</strong> {this.props.meeting.startDate} {this.props.meeting.startTime}</ListGroupItem>
                    <ListGroupItem><strong>End:</strong> {this.props.meeting.startDate} {this.props.meeting.startTime}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Row>
                        <Col sm={10}><GoLocation /> {this.props.meeting.location}</Col>
                        <Col sm={2} className="meeting-pointer"><Link to={`/meeting/edit/${this.props.meeting._id}`}><MdEdit /></Link></Col>
                    </Row>
                </Card.Body>

            </Card>
        )
    }
}

export default MeetingCard