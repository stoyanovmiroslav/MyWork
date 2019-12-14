/* eslint-disable no-useless-constructor */
import React, { Component, Fragment } from 'react';

import { Row } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

import MeetingCard from '../../MeetingCard';
import Loader from '../../Loader';
import NotDataAvailable from '../../Shared/NotDataAvailable';


import meetingService from '../../../services/meetingService';
import userService from '../../../services/userService';


class Meetings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            meetings: undefined
        }
    }

    componentDidMount() {
        meetingService.getAllMy().then((data) => this.setState({ meetings: data.data }));
    }

    refresh = () => {
        meetingService.getAllMy().then((data) => this.setState({ meetings: data.data }));
    }

    render() {
        if (!userService.isAuth()) {
            return <Redirect to='/login' />
        }

        const { meetings } = this.state;
        const meetingCards = meetings ? meetings.map(m => (<MeetingCard key={m._id} meeting={m} refresh={this.refresh} />)) : undefined;

        return (
            <Fragment>
                <h1 className="text-center mt-3 mb-3">My Meetings</h1>
                <Row>
                    {!this.state.meetings ? <Loader /> : meetingCards.length ? meetingCards : <NotDataAvailable/>}
                </Row>
            </Fragment>

        )
    }
}

export default Meetings