import React, { Component } from 'react'
import contacts from '../../contacts.json'
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'

class App extends Component {
  constructor () {
    super()
    this.state = {
      // where contacts is the array of contacts from contacts.json
      contacts: contacts
    }
  }
  render () {
    // console.log(this.state.contacts)
    return <div className='App'>
      <Header />
      <ContactList contacts={this.state.contacts} />

    </div>
  }
}

export default App
