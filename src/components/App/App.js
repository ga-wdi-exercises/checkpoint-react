import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'
import Header from '../Header/Header'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: this.props.contacts
    };

    this.addContact = this.addContact.bind(this);
  }

  addContact(contact) {
    
    this.setState({
      contacts: [
        ...this.state.contacts,
        contact
      ]
    });
  }

  render() {
    return <div className="App">
        <Header />
        <main>
          <Route exact path="/" render={() => <ContactList contacts={this.state.contacts} />} />
          <Route path="/new-contact" render={(props) => <NewContact addContact={this.addContact} {...props} />} />
        </main>
      </div>;
  }
}

export default App;