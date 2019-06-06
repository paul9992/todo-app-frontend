import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import TaskCount from './components/TaskCount';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

import uuidv1 from 'uuid/v1';

import axios from "axios";

const headers = ["My ToDo application"];

class App extends Component {

  /* state must be declared within the app class, not outside/above it */
  /* at this stage we just declare an array of objects - we don't define the structure of the objects within it */
  state = {
    taskList: []
  }

  // anything in here only happens on the first/initial render of component
  componentDidMount = () => {
    axios.get("https://xmuy4ztnh1.execute-api.eu-west-2.amazonaws.com/dev/tasks")
      .then(result => {
        this.setState({
          taskList: result.data.tasks
        })
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  /* function to ADD a task to the list */
  addTasktoListFunction = (taskDesc) => {
    let currentTaskList = this.state.taskList;

    // create a new Task Object of the required structure
    const taskObject = { 
     // id: uuidv1(),
      description: taskDesc, 
      completed: false,
      userID: 1 };

    axios.post("https://xmuy4ztnh1.execute-api.eu-west-2.amazonaws.com/dev/tasks", taskObject)
      .then(result => {
          const taskID = result.data.taskID;
          taskObject.taskID = taskID;
          currentTaskList.push(taskObject);
          this.setState({
            taskList: currentTaskList
        })
      })
      .catch(err => {
        console.log(err);
      });
      

  }

  /* function to DELETE a task from list (using SPLICE) */
  /*
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
  */ 

  /* function to DELETE a task from list (using FILTER) */
  deleteTaskfromListFunction = (task_id) => {

    /*
  
    currentTaskList = this.state.taskList.filter
    (val => {
      return val.id !== task_id;
    })

    this.setState({ taskList: currentTaskList })
    
  */
    
    axios.delete("https://xmuy4ztnh1.execute-api.eu-west-2.amazonaws.com/dev/tasks/" + task_id)
      .then(result => {

         const currentTaskList = this.state.taskList.filter
         (val => {
           return val.taskID !== task_id;
         })

          this.setState({
            taskList: currentTaskList
        })
      })
      .catch(err => {
        console.log(err);
      });

  }

  /* function to COMPLETE a task in the list */
  completeTaskinListFunction = (task_id) => {

    /*
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
    */

   // create a new Task Object of the required structure
   const taskObject = {
     completed: true };

   axios.put("https://xmuy4ztnh1.execute-api.eu-west-2.amazonaws.com/dev/tasks?taskID=" + task_id, taskObject)
   .then(result => {

    let currentTaskList = this.state.taskList;

    for (let i=0; i<currentTaskList.length; i++)
    {
      if (currentTaskList[i].taskID === task_id)
      {
        currentTaskList[i].completed = true;
        break;
      }
    }
    this.setState({ taskList: currentTaskList })

   })
   .catch(err => {
     console.log(err);
   });


  }


  /* main RENDER block */
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

        {/* Display input box & button to add a Task to the list */}
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
              /* ensure use the =>notation below rather than 'function' keyword  - changes scope of 'this' */
              this.state.taskList.map( (task, index) => {
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
