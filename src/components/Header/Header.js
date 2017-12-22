import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from "react-router-dom"

class Header extends Component {
  constructor(props){
    super()
    this.state = {
      contacts: []
    }
  }

  render() {
    return <div className="Header">
        <div className="nav-bar"><Link to="/">Home</Link></div>
        <div className="nav-bar"><Link to="/new-contact">NewContact</Link></div>




      </div>;
  }
}

export default Header
