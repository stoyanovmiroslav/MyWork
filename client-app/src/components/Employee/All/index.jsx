/* eslint-disable no-useless-constructor */
import React, { Component, Fragment } from 'react';

import { Table, Button } from 'react-bootstrap';
import employeeService from '../../../services/employeeService'
import {Link} from "react-router-dom";


// import withForm from '../../shared/hocs/withForm';
// import { FaAllergies } from 'react-icons/fa';

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
    const { employees } = this.state;

    const employeesBody = employees.map((e, i) => (
      <tr>
        <td>{i}</td>
        <td>{e.name}</td>
        <td>{e.position}</td>
        <td>{e.manager}</td>
        <td>{e.phone}</td>
        <td> <Link to={`/employee/details/${e._id}`} className="btn btn-color text-color">asd</Link></td>

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
              <th>Phone</th>
              <th>Action</th>
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