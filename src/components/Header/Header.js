import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1>Website</h1>
        <nav>
        <a href='/'>Home</a>
        <a href='../NewContact/NewContact'>New Contact</a>
        </nav>
      </header>
    );
  }
}

export default Header;