import React, { Component } from 'react';

class Header extends Component {

    render() {
      return (
          <h1 className="title" >
            {this.props.headerText}
          </h1>
      );
    }
  }
  

  const styles = {
    header : {
        color: "red"
    }
  };


  export default Header;