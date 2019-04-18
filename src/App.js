import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

class App extends Component {

  render() {

    const headers = ["Header One", "VAR is great", "Very amusing"];

    return (
      <div className="container">
        {
            headers.map(function(header, index) {
              return <Header headerText={header} key={index} />;
            })
        }
      </div>
    );
  }
}

export default App;
