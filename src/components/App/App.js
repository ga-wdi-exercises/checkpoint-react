import React, { Component } from 'react';
import Header from '../Header/Header.js'
import NewContact from '../NewContact/NewContact.js'
import ContactList from '../ContactList/ContactList.js'
import contacts from "../../contacts.json";
import {
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contacts: contacts
    }
  }

  onSubmit(e) {
    e.preventDefault()
    let newContacts = this.state.contacts.slice()
    this.setState({
      hasSearched: true
    })
  }

  handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return <div className="App">
      <Header />
      <Route exact path="/new-contact" render={()=> <NewContact onSubmit={this.onSubmit}/>}/>
      <Route
        exact path='/'
        render={(props) => (
          <ContactList
            {...props}
            contacts={ this.state.contacts }
          />
        )}
      />
      </div>;
  }
}

export default App;
