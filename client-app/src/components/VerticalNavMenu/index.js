import React, { Component, div } from 'react';
import { Nav, Navbar, Form } from 'react-bootstrap';
import './style.css';

export class VerticalNavMenu extends Component {

    render() {
        return (
            <div className="vn-background p-2">
                <Form.Control className="" placeholder="Search" />
                <hr className="my-2"></hr>
                <Navbar collapseOnSelect expand="lg" variant="light">
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                </Nav.Link>
                </Nav>
                </Navbar>
            </div>
        );
    }
}
