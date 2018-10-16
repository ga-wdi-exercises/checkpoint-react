import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header.js';
import ContactList from '../ContactList/ContactList.js';
import NewContact from '../NewContact/NewContact.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: this.props.contacts
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route 
          path = "/" />
        <ContactList contacts={this.state.contacts} />
        <Route 
          path="/new-contact"
          component={NewContact} 
          />
      </div>
      )
  }
}

export default App; 