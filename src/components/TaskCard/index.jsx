import React, { Component } from 'react';

import { Card, ListGroup, ListGroupItem, Row, Col, Dropdown } from 'react-bootstrap';
import { MdUpdate, MdStarBorder, MdTimer } from "react-icons/md";
import { TiDeleteOutline} from "react-icons/ti";
import './style.css';

import taskService from '../../services/taskService';

class TaskCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selection: this.props.task.status,
            color: "light"
        };
    }

    changeStatus = (event) => {
        let status = event.target.text;
        this.setState({ selection: status })
        this.changeColor(status)
        taskService.updateStatus(this.props.task._id, status);
    }

    changeColor = (status) => {
        let colors = { 'Open': 'warning', 'Closed': 'success', 'In Progress': 'primary' };
        this.setState({ color: colors[status] })
    }

    componentDidMount = () => {
        this.changeColor(this.props.task.status)
    }

    deleteCard = (event) => {
        taskService.deleteById(this.props.task._id).then(data => {
            this.props.refresh();
        });
    }

    render() {
        return (
            <Card className="ml-4 mb-4" style={{ width: '16rem' }}>
                <Card.Body>
                    <Row>
                        <Col sm={10}><Card.Title>{this.props.task.name}</Card.Title></Col>
                        <Col sm={2}><TiDeleteOutline size={21} className="task-pointer" onClick={this.deleteCard} /></Col>
                    </Row>
                    <Card.Text>{this.props.task.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        <Row>
                            <Col sm={9}><MdTimer /> {this.props.task.deadline}</Col>
                            <Col sm={3}><MdStarBorder /> {this.props.task.points}</Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Dropdown>
                        <Dropdown.Toggle className="w-100" variant={this.state.color} id="dropdown-basic" size="sm"><MdUpdate /> {this.state.selection}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={this.changeStatus}>Open</Dropdown.Item>
                            <Dropdown.Item onClick={this.changeStatus}>In Progress</Dropdown.Item>
                            <Dropdown.Item onClick={this.changeStatus}>Closed</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Body>
            </Card>
        )
    }
}

export default TaskCard