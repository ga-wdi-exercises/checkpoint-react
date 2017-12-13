import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contacts: this.props.contacts
    }
    this.newContact = this.newContact.bind(this)
  }

  newContact (contact) {
    let theContacts = this.state.contacts.slice()
    theContacts.push(contact)

    this.setState({
      contacts: theContacts
    })
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' render={() => (
              <ContactList contacts={this.state.contacts} />
            )} />
            <Route path='/new-contact' render={(props) => (
              <NewContact {...props} newContact={(contact) => this.newContact(contact)} />
            )} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
