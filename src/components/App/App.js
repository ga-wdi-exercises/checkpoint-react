import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import ContactList from '../ContactList/ContactList.js';
import NewContact from '../NewContact/NewContact';
//import ContactsData from '../../contacts.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    };
  }
  render() {
    return (
      <div className="App">
        <div className="Navbar">
          <h1>Contact Manager</h1>
          <Link to="/contacts"> Home </Link>
          <Link to="/newContact"> New Contacts </Link>
        </div>
        <div className="main">
          <Switch>
            <Route path="/contacts" render={() => <ContactList />} />
            <Route path="/newcontact" render={() => <NewContact />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
