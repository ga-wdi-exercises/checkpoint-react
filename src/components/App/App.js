import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import ContactList from '../ContactList/ContactList.js';
import NewContact from '../NewContact/NewContact';
import Header from '../Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    // accept contacts as a prop and
    // use them to set the initial state for your component.
    this.state = {
      contacts: this.props.contacts
    };
    this.handleNewContact = this.handleNewContact.bind(this);
  }

  handleNewContact(contact) {
    this.state.contacts;
    contact.push(contact);

    this.setState({
      contacts: contact
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            path="/new-contact"
            render={() => (
              <NewContact handleNewContact={this.handleNewContact} />
            )}
          />
          <Route
            path="/"
            render={() => <ContactList contacts={this.state.contacts} />}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
