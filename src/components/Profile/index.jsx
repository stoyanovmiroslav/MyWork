import React, { Component } from 'react';
import { Redirect  } from "react-router-dom";

import { Row, Col, Container } from 'react-bootstrap';
import userService from '../../services/userService'
import employeeService from '../../services/employeeService'


class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: [],
            employeesCount: 0
        }
    }
    
    componentDidMount() {
        userService.getCompanyData().then((data) => {
            this.setState({ user: data.data[0] });
        });

        employeeService.getAllMy().then(data => {
            this.setState({ employeesCount: data.data.length });
        });
    }

    render() {
        if (!userService.isAuth()) {
            return <Redirect to='/login' />
        }

        return (
            <Container>
                <h1 className="text-center mt-3">Profile</h1>
                <Row>
                    <Col md={{ span: 6 }}>
                        <br />
                        <dl className="dl-horizontal">
                            <dt>Company number:</dt>
                            <dd>{this.state.user._id}</dd>
                            <dt>Username:</dt>
                            <dd>{this.state.user.username}</dd>
                            <dt>Company name:</dt>
                            <dd>{this.state.user.companyName}</dd>
                            <dt>Registered at:</dt>
                            {this.state.user._kmd && <dd>{this.state.user._kmd.ect.split('T')[0]}</dd>}
                        </dl>
                    </Col>
                    <Col md={{ span: 6 }}>
                        <br />
                        <dl className="dl-horizontal">
                            <dt>Total employees:</dt>
                            <dd>{this.state.employeesCount}</dd>
                        </dl>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Profile