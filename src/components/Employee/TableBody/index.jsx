import React, { Component, Fragment } from 'react';

import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import NotDataAvailable from '../../Shared/NotDataAvailable';

class TableBody extends Component {

    render() {
        return (
            <Fragment>
                <tbody>
                    {this.props.employees.length > 0 ? this.props.employees.map((e, i) => (
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
                        </tr>)) : <NotDataAvailable />}
                </tbody>
            </Fragment>
        )
    }
}

export default TableBody