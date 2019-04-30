import React, { Component } from 'react';

class ListTask extends Component {

  render() {
    return (
      <div className="container">

      <div className="row" id="task-table-area">

        <div className="col-sm-4 col-md-6">
          {this.props.taskText}
        </div>

        <div className="col-sm-4 col-md-3">
          <form action="/action_page.php">
            <input type="submit" value="Done"></input>
          </form>
        </div>

        <div className="col-sm-4 col-md-3">
          <form action="/action_page.php">
            <input type="submit" value="Delete"></input>
          </form>
        </div>

      </div>

</div>
    );
  }
}

export default ListTask;