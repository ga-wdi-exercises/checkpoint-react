import React, { Component } from 'react'
import Header from '../Header/Header'
import {
  Link,
  Route
} from 'react-router-dom'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'
// const contacts = require('../../contacts.json')

console.log(typeof data)
class App extends Component {
  constructor () {
    super()

    // this.state = {
    //   contacts: contacts
    // }
  }
  render () {
    return (
      <div className='App'>
        <Header />
        <Route path='/'
          component= {ContactList}
          exact
        />
        <Route path='/new-contact'
          component = {NewContact}
          exact
        />
      </div>
    )
  }
}

export default App
