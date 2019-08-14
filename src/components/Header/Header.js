import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <h1>header component</h1>
        <nav>
          <Link to='/'>homepage</Link>
          <Link to='/new-contact'>new contact</Link>
        </nav>
      </div>
    );
  }
}

export default Header;
