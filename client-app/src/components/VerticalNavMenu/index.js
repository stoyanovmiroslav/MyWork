import React, { Component, div } from 'react';
import { Nav, Navbar, Form } from 'react-bootstrap';
import './style.css';

import { FaInfo, FaPhone } from "react-icons/fa";

export class VerticalNavMenu extends Component {

    render() {
        return (
            <div className="vn-background p-2">
                <div class="text-center d-none d-none d-lg-block">
                    <img src={require(`../../static/images/logo.png`)} alt="my-work-logo" className="img-responsive" width="220" />
                </div>
                {/* <Form.Control className="" placeholder="Search" /> */}
                <hr className="my-2"></hr>
                <Navbar collapseOnSelect expand="lg" variant="light">
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/about"><FaInfo style={{ marginBottom: '3px' }} /> About</Nav.Link>
                        <Nav.Link href="/contacts"><FaPhone style={{ marginBottom: '3px' }} /> Contacts</Nav.Link>
                        {/* <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
                        <Nav.Link href="/home">Active</Nav.Link> */}
                    </Nav>
                </Navbar>
                <div class="text-center d-none d-none d-lg-block mb-4">
                    <div className="menu-height"></div>
                    <img src={require(`../../static/images/logo_1.png`)} alt="my-work-logo" width="220" />
                </div>
            </div>
        );
    }
}
