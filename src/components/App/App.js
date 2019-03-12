import React, { Component } from 'react';
import Header from '../Header/Header';
import ContactList from '../ContactList/ContactList';
import NewContact from '../NewContact/NewContact';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: props.contacts
    }
    this.addContact = this.addContact.bind(this)
  }

  addContact(newContact) {
    this.setState({
      contacts: [...this.state.contacts, newContact]
    })
    alert('added ' + newContact.name);
  }

  render() {
    return <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact render={() => <ContactList contacts={this.state.contacts} />} />
        <Route path="/new-contact" render={(props) => <NewContact {...props} addContact={this.addContact} />} />
      </Switch>

    </div>;
  }
}

export default App;