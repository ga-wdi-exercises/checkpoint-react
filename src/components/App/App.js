import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import Contact from '../Contact/Contact.js'
import ContactList from '../ContactList/ContactList.js'
import Header from '../Header/Header.js'
import NewContact from '../NewContact/NewContact.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // where contacts is the array of contacts from contacts.json
      contacts: this.props.contacts
    };
  }
  render() {
    return <div className="App">
      <Header />
      <Switch>
        <Route path="/new-contact" render={() => <NewContact />}></Route>
        <Route path="/" render={() => <ContactList contacts={this.state.contacts}/>}></Route>
      </Switch>
    </div>;
  }
}

export default App;