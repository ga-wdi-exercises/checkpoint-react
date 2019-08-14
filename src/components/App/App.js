import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
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
    console.log(this.props.contacts)
    return <div className="App">
      <header>
        <h1>fonbook</h1>
        <nav>
          <Link to='/'>contacts</Link>
          <Link to='/new-contact'>+ new contact</Link>
        </nav>
      </header>
      <Route
        path='/'
        exact component={() => <ContactList contacts={this.props.contacts}/>}
      />
      <Route
      />
      <Route
        path='/new-contact'
        exact component={() => <NewContact />}
      />
      <Route
      />
    </div>
  }
}

export default App;