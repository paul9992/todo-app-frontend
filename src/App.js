import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const headers = ["My ToDo application"];
const tasks = ["A first task", "A second task", "A third task"];


class App extends Component {

  render() {
    return (

      <div className="container">
        {
          headers.map(function (header, index) {
            return <Header headerText={header} key={index} />;
          })
        }

        <p>Things to do: 3</p>

        <AddTask />

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
