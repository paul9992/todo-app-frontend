import React, { Component } from 'react';

class TaskCount extends Component {

  render() {
    return (
      <p id="task-table-area" className="col-12">
        Number of Tasks: {this.props.taskCountTotal}
      </p>
    );
  }
}

export default TaskCount;