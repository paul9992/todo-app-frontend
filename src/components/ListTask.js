import React, { Component } from 'react';

class ListTask extends Component {


  deleteTaskButtonClicked = () => {
    this.props.deleteTaskFunction(this.props.taskObject.id);
  }

  completeTaskButtonClicked = () => {
    this.props.completeTaskFunction(this.props.taskObject.id);
  }

  render() {

    /* determine how the Complete button will look depending on whether Task is complete */
    let completeButtonHTML

    if (this.props.taskObject.completed) {
      completeButtonHTML = <button type="button" class="grey_button" onClick={this.completeTaskButtonClicked}>Task is complete</button>
    }
    else {
      completeButtonHTML = <button type="button" class="green_button" onClick={this.completeTaskButtonClicked}>Mark as Complete</button>
    }

    return (

      <div className="row" id="task-table-area">

        <div className="col-sm-12 col-md-6">
          {this.props.taskObject.task}
        </div>

        <div className="col-sm-6 col-md-3">
          {completeButtonHTML}
        </div>

        <div className="col-sm-6 col-md-3">
          <button type="button" onClick={this.deleteTaskButtonClicked}>Delete</button>
        </div>

      </div>


    );
  }
}

export default ListTask;