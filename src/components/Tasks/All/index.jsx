/* eslint-disable no-useless-constructor */
import React, { Component, Fragment } from 'react';

import { Row } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

import TaskCard from '../../TaskCard';
import LoaderExampleSizesInverted from '../../Loader';
import TaskSelection from '../../TaskSelection';
import NotDataAvailable from '../../Shared/NotDataAvailable'

import taskService from '../../../services/taskService';
import userService from '../../../services/userService';


class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: undefined
    }
  }

  tasksBySelection = (status, points) => {
    taskService.getMyTaskBySelection(status, points).then((data) => this.setState({ tasks: data.data }));
  }

  componentDidMount() {
    taskService.getAllMy().then((data) => this.setState({ tasks: data.data }));
  }

  refresh = () => {
    taskService.getAllMy().then((data) => this.setState({ tasks: data.data }));
  }

  render() {
    if (!userService.isAuth()) {
      return <Redirect to='/login' />
    }

    const { tasks } = this.state;
    const taskCards = tasks ? tasks.map(t => (<TaskCard key={t._id} task={t} refresh={this.refresh}/>)) : undefined;

    return (
      <Fragment>
        <TaskSelection tasksBySelection={this.tasksBySelection}/>
        <Row>
        {!this.state.tasks ? <LoaderExampleSizesInverted/> : taskCards.length ?  taskCards : <NotDataAvailable/>}
        </Row>
      </Fragment>

    )
  }
}

export default Tasks