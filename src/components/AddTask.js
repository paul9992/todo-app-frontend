import React, { Component } from 'react';
import { timingSafeEqual } from 'crypto';

class AddTask extends Component {

    state = {
      taskDescription: ""
    }

    taskDataEntered = (event) => {
      this.setState(
        {taskDescription: event.target.value}
      )
    }

    addTaskButtonClicked = () => {
      this.props.addTaskFunction(this.state.taskDescription);
    }



    render() {
      return (

        <div id="task-entry-area" className="col-12">

              <input type="text" onChange= {this.taskDataEntered} />
              <button type="button" onClick= {this.addTaskButtonClicked} >Add Task</button>

        </div>
        
      );
    }
  }
  
  export default AddTask;