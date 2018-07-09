import React, { Component } from 'react'
// import contacts from '../../src/contacts.json'
import Header from '../Header/Header'
import { Route } from 'react-router-dom'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'

let Contacts = [
  {
    name: "Tweety",
    email: "tweety@gmail.com",
    profile_picture: "https://upload.wikimedia.org/wikipedia/en/0/02/Tweety.svg"
  }
]

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contacts: Contacts
    }
  }
  render () {
    return <div className='App'>
      <Route
        path='/'
        component={ContactList}
      />

      <Route 
        path='/new-contact'
        component={NewContact}
      />
      <p>app</p>
      <Header />
    </div>
  }
}

export default App
