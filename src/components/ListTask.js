import React, { Component } from 'react';

class ListTask extends Component {


  deleteTaskButtonClicked = () => {
    this.props.deleteTaskFunction(this.props.taskObject.taskID);
  }

  completeTaskButtonClicked = () => {
    this.props.completeTaskFunction(this.props.taskObject.taskID);
  }

  render() {

    /* determine how the Complete button will look depending on whether Task is complete ('conditional rendering')*/
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
          {this.props.taskObject.description}
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