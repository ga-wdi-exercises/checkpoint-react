import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import NewContact from '../NewContact/NewContact.js'
import Header from '../Header/Header.js'
import ContactList from '../ContactList/ContactList.js'


class App extends Component {
  constructor(props){
    super(props)

    this.contacts = this.props.contacts

    this.onSubmit = this.onSubmit.bind(this)
    this.updateContacts = this.updateContacts.bind(this)
  }

  updateContacts(name, email, image) {
    let contact = {
      name,
      email,
      image
    }

    this.setState({
      contacts: this.state.contacts.push(contact)
    })
  }

  onSubmit(e){
    e.preventDefault()
    this.updateContacts()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' render={(props) => (
            <ContactList contacts={this.contacts}/>
          )}
        />
        <Route path='/new-contact' render={(props) => (
            <NewContact submit={this.onSubmit}/>
          )}
        />
      </div>

    )
  }
}

export default App;
