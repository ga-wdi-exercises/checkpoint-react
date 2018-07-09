import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Header from '../Header/Header.js'
import ContactList from '../ContactList/ContactList.js'
import NewContact from '../NewContact/NewContact.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      contacts: this.props.contacts
      // I am getting an Typerror Undefined property for contacts here that I cannot figure out...
    }
  }
  render() {
    console.log(this.state.contacts)
    return(
      <div className="App">
        <Header />
        <main>
          <p>Contacts App</p>
          <Route
            exact path="/"
            render={() => <ContactList contacts={this.state.contacts} />}
          />
          <Route exact path="/new-contact" component={NewContact} />
        </main>
      </div>
    )
  }
}

export default App
