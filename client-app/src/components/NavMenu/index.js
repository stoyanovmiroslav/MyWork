﻿/* eslint-disable no-useless-constructor */
import React, { Component, Fragment } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import userService from '../../services/userService';

import { FaUserPlus, FaUserAlt, FaHome } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";

class NavMenu extends Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    userService.logout()
      .then(() => {
        sessionStorage.removeItem('authtoken');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('userId');
        this.props.history.push('/')
      });
  };

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="/">MyWork</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"><FaHome style={{ marginBottom: '5px' }}/> Home</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Employees" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/employee/create">Add new employee</NavDropdown.Item>
              <NavDropdown.Item href="/employee/all">Delete employee</NavDropdown.Item>
              <NavDropdown.Item href="/employee/all">See all employees</NavDropdown.Item>
              {/*<NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Nav>
            {userService.isAuth() ?
              (<Fragment>
                <Nav.Link href="/user"><FaUserAlt style={{ marginBottom: '3px' }}/> Welcome, {sessionStorage.getItem('username')}</Nav.Link>
                <Nav.Link onClick={this.logout}><IoIosLogOut style={{ marginBottom: '3px' }} /> Logout</Nav.Link>
              </Fragment>) :
              (<Fragment>
                <Nav.Link href="/login"><FiLogIn style={{ marginBottom: '3px' }}/> Login</Nav.Link>
                <Nav.Link href="/register"><FaUserPlus style={{ marginBottom: '3px' }}/> Register</Nav.Link>
              </Fragment>)}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NavMenu)