import React, { Component } from 'react';
import {Route, Link, Switch, Redirect} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                      <header><h1>Contacts</h1></header>
      <nav>
      <Link to= "/"> 
      Home
      </Link>
  
      <Link to= "/new-contact"> 
      New Contacts
      </Link>

    </nav>
            </div>
        );
    }
}

export default Header;