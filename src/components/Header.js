import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div className="heading col-12" >
        {this.props.headerText}
      </div>
    );
  }
}

export default Header;