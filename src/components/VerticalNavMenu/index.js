import React, { Component, div, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';

import userService from '../../services/userService'
import './style.css';

import { Nav, Navbar, Row, Col } from 'react-bootstrap';
import { FaInfo, FaPhone, FaCalendarAlt } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";

class VerticalNavMenu extends Component {
    render() {
        return (
            <div className="vn-background p-2">
                <div className="text-center d-none d-none d-lg-block">
                    <img src={require(`../../static/images/logo.png`)} alt="my-work-logo" className="img-responsive" width="220" />
                </div>
                <hr className="my-2"></hr>
                <Navbar collapseOnSelect expand="lg" variant="light">
                    <Nav defaultActiveKey="/home" className="flex-column">
                        {!userService.isAuth() ?
                            (<Fragment>
                                <Nav.Link as={Link} to="/about"><FaInfo style={{ marginBottom: '3px' }} /> About</Nav.Link>
                                <Nav.Link as={Link} to="/contacts"><FaPhone style={{ marginBottom: '3px' }} /> Contacts</Nav.Link>
                            </Fragment>) :
                            <Fragment>
                                <Row className="mb-3">
                                    <Col sm={9}><Nav.Link as={Link} to="/meetings"><FaCalendarAlt style={{ marginBottom: '3px' }} /> Meetings</Nav.Link></Col>
                                    <Col sm={3}><Nav.Link as={Link} to="/meeting/create"><IoIosAdd size={27} className="task-pointer" onClick={this.deleteCard} style={{ marginBottom: '3px' }} /></Nav.Link></Col>
                                </Row>
                            </Fragment>}
                    </Nav>
                </Navbar>
                <div className="text-center d-none d-none d-lg-block mb-4">
                    <div className="menu-height"></div>
                    <img src={require(`../../static/images/logo_1.png`)} alt="my-work-logo" width="220" />
                </div>
            </div>
        );
    }
}

export default withRouter(VerticalNavMenu)