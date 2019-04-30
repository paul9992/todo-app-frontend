import React, { Component } from 'react';

class ListTask extends Component {


  deleteTaskButtonClicked = (event) => {
    /* can't work out how to find the index of the row that needs to be deleted */
    let indexOfClickedButton = this.props.key

    alert("Delete row clicked = " + indexOfClickedButton)

    /* this.props.deleteTaskFunction(event.target.value); */
  }

  render() {
    return (

      <div className="row" id="task-table-area">

        <div className="col-sm-12 col-md-6">
          {this.props.taskObject.task}
        </div>

        <div className="col-sm-6 col-md-3">
          <button>Mark as Complete</button>
        </div>

        <div className="col-sm-6 col-md-3">
          <button type="button" onClick={this.deleteTaskButtonClicked}>Delete</button>
        </div>


        {/*
        Trying to make output conditional on the Task object 'completed' value - not working 

        <div className="col-sm-6 col-md-3"> 
          if ({this.props.taskObject.completed} === true)
            {
              
              <button>Completed!</button>
            }
          else
            {
              <button>Mark as Complete</button>}
            }
        </div>

        <div className="col-sm-6 col-md-3">
          if ({this.props.taskObject.completed} === true)
            {
              <button type="button" onClick= {this.deleteTaskButtonClicked}>Delete</button>
            }
        </div>
        */}

      </div>


    );
  }
}

export default ListTask;