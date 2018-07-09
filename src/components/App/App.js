import React, { Component } from 'react'
import Header from '../Header/Header'
import {Router, Switch} from 'react-router-dom'
import NewContact from '../NewContact/NewContact'
import ContactList from '../ContactList/ContactList'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contacts: this.props.contacts
    }
    this.handleNewContact = this.handleNewContact.bind(this);
  }

handleNewContact(contact) {
  this.setState;
  contact.push(contact);

  this.setState({
    contaxcts: contact
  });
}

  render () {
    return (
    <div className='App'>
      <header />
      <switch>
      <Route
      path='/new-contact'
      render={() => (
        <NewContact handleNewContact={this.handleNewContact} />
      )}
      />
      <Route
      path='/'
      render={() => <ContactList contacts={this.state.contacts} />}
      />
      </switch>
    </div>
    );
  }
}

export default App
