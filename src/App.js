import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import TaskCount from './components/TaskCount';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const headers = ["My ToDo application"];
const tasks = ["Get up", "Get out of bed", "Drag a comb across my head"];


class App extends Component {

  render() {
    return (

      <div className="App">
        {/* Harriet's example on Slack has the above as className="App" - it was originally 'container' in last week's class */}
        {/* class 'App' which is defined in App.css and I have added styles in there ... which is preferred/correct? */}

        {/* Display Header line(s) */}
        {
          headers.map(function (header, index) {
            return <Header headerText={header} key={index} />;
          })
        }

        {/* Display input box/button to add a Task to the list */}
        <AddTask />

        {/* Display the count of Tasks */}
        <TaskCount />

        {/* Display the list of Tasks */}
        {
          tasks.map(function (task, index) {
            return <ListTask taskText={task} key={index} />;
          })
        }

      </div>

    );
  }
}

export default App;
