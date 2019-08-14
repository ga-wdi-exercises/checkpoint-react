import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch, Redirect } from "react-router-dom";
import ContactsData from "../../contacts.json"



class Header extends Component {
    render() {
      return (
          <div className="header">
           <h3>Contacts</h3>
           <nav className="NavSection">
                <Link className="navLinks" to="/Home">Home</Link>
                <Link className="navLinks" to="/NewContact">NEW CONTACT</Link>
            </nav>
          </div>
      );
    }
  }


export default Header;










