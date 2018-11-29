import React, { Component } from 'react'
import { Route, Link } from "react-router-dom"
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import Contact from '../Contact/Contact'
import NewContact from '../NewContact/NewContact';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: this.props.contacts
    }
  }
  // showContact()
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route exact path="/" render={() => <ContactList
            contacts={this.state.contacts} />} />
          <Route exact path="/new-contact" render={() => <NewContact />} />
        </main>

      </div>
    )
  }
}

export default App;