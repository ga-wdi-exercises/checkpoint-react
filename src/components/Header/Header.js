import { Route, Link, Redirect, Switch } from "react-router-dom";
import React, { Component } from 'react'
import Contact from "../Contact/Contact";
import ContactList from "../ContactList/ContactList";
import NewContact from "../NewContact/NewContact";

class Header extends Component {
  render () {
    return (
      <div>
        <header>
          <h1>
            <nav><Link to="/*">Home</Link> <Link to="/new-contact">New Contact</Link></nav>
          </h1>
        </header>
        <div className="Routes">
          <Route path="/*" render={() => <ContactList contacts={this.state.contacts}/>}/>
          <Route path="/new-contact" render={() => <NewContact handleNewContact={this.handleNewContact}/>}/>
        </div>
      </div>
    );
  }
}



export default Header;
