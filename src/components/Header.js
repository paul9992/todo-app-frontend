import React, { Component } from 'react';

class Header extends Component {

    render() {
      return (
          <h1 id="heading" >
            {this.props.headerText}
          </h1>
      );
    }
  }

  export default Header;