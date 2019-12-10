/* eslint-disable no-useless-constructor */
import React, { Component, Fragment } from 'react';

import { Table, Button } from 'react-bootstrap';
import { Link, Redirect  } from "react-router-dom";

import employeeService from '../../../services/employeeService'
import userService from '../../../services/userService'

class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    employeeService.getAllMy().then((data) => this.setState({ employees: data.data }));
  }

  render() {
    if (!userService.isAuth()) {
      return <Redirect to='/login' />
    }

    const { employees } = this.state;

    const employeesBody = employees.map((e, i) => (
      <tr key={e._id}>
        <td>{++i}</td>
        <td>{e.name}</td>
        <td>{e.position}</td>
        <td>{e.manager}</td>
        <td>
          <Link to={`/employee/details/${e._id}`} className="btn btn-color text-color">
            <Button variant="primary" size="sm">Details</Button>
          </Link>
          <Link to={`/employee/Edit/${e._id}`} className="btn btn-color text-color">
            <Button variant="success" size="sm">Edit</Button>
          </Link>
          <Link to={`/employee/delete/${e._id}`} className="btn btn-color text-color">
            <Button variant="outline-danger" size="sm">Delete</Button>
          </Link>
        </td>
      </tr>));

    return (
      <Fragment>
        <h1 className="text-center mt-3">All Employees</h1>
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Position</th>
              <th>Manager</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employeesBody}
          </tbody>
        </Table>
      </Fragment>
    )
  }
}

export default Employees