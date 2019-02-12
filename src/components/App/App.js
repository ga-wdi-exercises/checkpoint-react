import React, { Component } from 'react';
import Header from '../Header/Header'
import contacts from '../../contacts.json'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'
import { Route, Link } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: this.props.contacts
    }
  }
  render() {
    return <div className="App">
        <p>app</p>
        <Link to="/">
          <h1>HOME</h1>
          </Link>
        <Route path="/" exact render={(routerProps) => <ContactList {...routerProps} {...this.state} />} />
          <Route path="/new-contact" render={(routerProps) => <NewContact {...routerProps} {...this.state} />} />
      </div>;
  }
}

export default App;