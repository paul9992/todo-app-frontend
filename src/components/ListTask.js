import React, { Component } from 'react';

class ListTask extends Component {

    render() {
      return (
        <div className="row">
         
            <div className="row">
              <div className="col-sm-4 col-md-6">
                  A first task
              </div>
              <div className="col-sm-4 col-md-3">
                  <form action="/action_page.php">
                      <input type="submit" value="Done">
                  </form>
              </div>
              <div className="col-sm-4 col-md-3">
                  <form action="/action_page.php">
                      <input type="submit" value="Delete">
                  </form>
              </div>
            </div>

      );
    }
  }

  export default ListTask;