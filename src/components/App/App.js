import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import ContactList from '../ContactList/ContactList';
import NewContact from '../NewContact/NewContact';
import Header from '../Header/Header';

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      // where contacts is the array of contacts from contacts.json
      contacts: this.props.contacts
    };
    
    this.addContact = this.addContact.bind(this);
  }
  
  addContact(contact) {
    this.setState({
      contacts: [ ...this.state.contacts, contact ]
    });
  }
  
  render() {
    return <div className="App">
      	<Header />
        <Route path="/" component={() => { return <ContactList contacts={ this.state.contacts } />; } } />
      	<Route path="/new-contact" component={ () => { return <NewContact addContact={ this.addContact } />; } } />
      </div>;
  }
}

export default App;