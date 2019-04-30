import React, { Component } from 'react';

class ListTask extends Component {

  render() {
    return (


      <div className="row" id="task-table-area">

        <div className="col-sm-12 col-md-6">
          {this.props.taskText}
        </div>

        <div className="col-sm-6 col-md-3">
          <button type="button">Done</button>
        </div>

        <div className="col-sm-6 col-md-3">
          <button type="button">Delete</button>
        </div>

      </div>


    );
  }
}

export default ListTask;