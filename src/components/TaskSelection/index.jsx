import React, { Component } from 'react';

class TaskSelection extends Component {
    constructor(props) {
        super(props);

        this.status = '';
        this.points = '';
    }

    changeSelection = () => {
        debugger;
        this.props.tasksBySelection(this.status, this.points)
    }

    setPoints = (event) => {
        this.points = event.target.value;
        this.changeSelection();
    }

    setStatus = (event) => {
        this.status = event.target.value;
        this.changeSelection();
    }

    render() {
        return (
            <div className="mr-2 mb-2 text-right">
                <span className="text-mutedm">Points: </span>
                <select name="points" onChange={this.setPoints}>
                    <option value="">All</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <span className="ml-2 text-muted">Status: </span>
                <select name="status" onChange={this.setStatus}>
                    <option value="">All</option>
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                    <option value="In Progress">In Progress</option>
                </select>
            </div>
        )
    }
}

export default TaskSelection