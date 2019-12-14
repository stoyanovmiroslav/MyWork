import React, { Component } from 'react';

import { Table } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

import Loader from '../../Loader';
import TableBody from '../TableBody';
import TableHead from '../TableHead';

import employeeService from '../../../services/employeeService'
import userService from '../../../services/userService'

class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: undefined
    }
  }

  componentDidMount() {
    employeeService.getAllMy().then((data) => {
      this.setState({ employees: data.data })
    });
  }

  render() {
    if (!userService.isAuth()) {
      return <Redirect to='/login' />
    }

    const { employees } = this.state;
    const headers = ["#", "Full Name", "Position", "Manager", "Actions"]

    return (
      <div className="mr-2" >
        <h1 className="text-center mt-3 mb-3">All Employees</h1>
        <br />
        <Table striped bordered hover>
          <TableHead headers={headers}/>
          {this.state.employees && <TableBody employees={employees} />}
        </Table>
        {!this.state.employees && <Loader />}
      </div>
    )
  }
}

export default Employees