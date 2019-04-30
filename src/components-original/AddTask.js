import React, { Component } from 'react';

class AddTask extends Component {

    render() {
      return (

        <div id="task-entry-area">
          <form action="/action_page.php">
              <input type="text" name="" value=""></input>
              <input type="submit" value="Add"></input>
          </form>
        </div>
        
      );
    }
  }
  


  export default AddTask;