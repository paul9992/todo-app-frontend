import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import TaskCount from './components/TaskCount';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

import uuidv1 from 'uuid/v1';

const headers = ["My ToDo application"];

class App extends Component {

  /* state must be declared within the app class, not outside/above it */
  state = {
    taskList: []
  }

  addTasktoListFunction = (taskDesc) => {
    let currentTaskList = this.state.taskList;

    // create a new Task Object of the required structure
    const taskObject = { 
      id: uuidv1(),
      task: taskDesc, 
      completed: false };

    currentTaskList.push(taskObject);

    this.setState({ taskList: currentTaskList })
  }


  deleteTaskfromListFunction = (task_id) => {
    let currentTaskList = this.state.taskList;

    for (let i=0; i<currentTaskList.length; i++)
    {
      if (currentTaskList[i].id === task_id)
      {
        currentTaskList.splice(i, 1);
        break;
      }
    }
    this.setState({ taskList: currentTaskList })
  }

  completeTaskinListFunction = (task_id) => {

    let currentTaskList = this.state.taskList;

    for (let i=0; i<currentTaskList.length; i++)
    {
      if (currentTaskList[i].id === task_id)
      {
        currentTaskList[i].completed = true;
        break;
      }
    }

    this.setState({ taskList: currentTaskList })
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
              this.state.taskList.map( (task, index) => {
  /*              return <ListTask taskObject={task} key={index} />;  */
  /*              return <ListTask deleteTaskFunction={this.deleteTaskfromListFunction} taskObject={task} key={index} />; */
                  return <ListTask deleteTaskFunction={this.deleteTaskfromListFunction} completeTaskFunction={this.completeTaskinListFunction} taskObject={task} key={index} />; 
              })
            }
          </div>
        </div>

      </div>

    );
  }
}

export default App;
