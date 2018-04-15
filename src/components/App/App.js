import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import ContactList from '../ContactList/ContactList.js';
import ContactsData from '../../contacts.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: ContactsData
    };
  }
  render() {
    return (
      <div className="App">
        <div className="Navbar">
          <h1>Contact Manager</h1>
          <Link to="/ContactList"> Home </Link>
          <Link to="/NewContact"> New Contacts </Link>
        </div>
        <div className="main">
          <Switch>
            <Route
              path="/contacts"
              render={() => <ContactList contacts={this.state.contacts} />}
            />
            <Route path="/*" render={() => <Redirect to="/contacts" />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
