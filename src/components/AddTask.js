import React, { Component } from 'react';

class AddTask extends Component {

    render() {
      return (

        <div id="task-entry-area">
          <form action="/action_page.php">
              <input type="text" name="" value="">
              <input type="submit" value="Add">
          </form>
        </div>

      );
    }
  }
  


  export default AddTask;