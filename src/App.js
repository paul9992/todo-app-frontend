import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import TaskCount from './components/TaskCount';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const headers = ["My ToDo application"];

class App extends Component {

  /* state must be declared within the app class, not outside/above it */
  state = {
    taskList: []
  }

  addTasktoListFunction = (taskDesc) => {
    let currentTaskList = this.state.taskList;

    // create a new Task Object of the required structure
    const taskObject = { task: taskDesc, completed: false };

    currentTaskList.push(taskObject);

    //currentTaskList.push(taskDesc);

    this.setState({ taskDescriptionList: currentTaskList })
  }

  // draft function - not used yet //
  deleteTaskfromListFunction = (index) => {
    let currentTaskList = this.state.taskDescriptionList;

    currentTaskList.splice(index, 1);

    this.setState({ taskDescriptionList: currentTaskList })
  }


  render() {
    return (

      <div className="container App">

        <div className="row">
          {/* Display Header line(s) */}
          {
            headers.map(function (header, index) {
              return <Header headerText={header} key={index} />;
            })
          }
        </div>

        {/* Display input box/button to add a Task to the list */}
        <div className="row">
          <AddTask addTaskFunction={this.addTasktoListFunction} />
        </div>

        {/* Display the count of Tasks */}
        <div className="row">
          <TaskCount taskCountTotal={this.state.taskList.length} />
        </div>

        {/* Display the list of Tasks */}
        <div className="row">
          <div className="container">
            {
              this.state.taskList.map(function (task, index) {
                return <ListTask taskObject={task} key={index} />;
              })
            }
          </div>
        </div>

      </div>

    );
  }
}

export default App;
