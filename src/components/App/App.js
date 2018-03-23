import React, { Component } from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import Contact from '../Contact/Contact'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'
import contacts from '../../contacts.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // where contacts is the array of contacts from contacts.json
      contacts: this.props.contacts
    }
    // this.addContact = this.state.addContact.bind(this)
  }
  addContact(contact) {
    this.setState({
      contacts: [...this.state.contacts, contact]
    })
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Route
          path="/"
          render={() => <ContactList contacts={this.state.contacts} />}
        />
        <Route
          path="/new-contact"
          render={() => <NewContact addContact={this.addContact} />}
        />
      </div>
    )
  }
}

export default App
