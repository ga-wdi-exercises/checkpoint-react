import React, { Component } from 'react';
import {Route, Link} from "react-router-dom"
import Header from '../Header/Header'
import Contact from '../Contact/Contact'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'

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
        <main>
          <Route exact path="/" render={() => <ContactList contacts={this.props.contacts} />} />
          <Route path="/new-contact" render={() => <NewContact />} />
        </main>

      </div>
    )
  }
}



export default App;