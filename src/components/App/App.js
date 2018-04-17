import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import ContactList from '../ContactList/ContactList.js';
import NewContact from '../NewContact/NewContact';
import Header from '../Header/Header';

// const App = (props) => {
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts
    };
  }
  render() {
    let contacts = this.state.contacts;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            path="/new-contact"
            render={() => <NewContact contacts={contacts} />}
          />
          <Route path="/" render={() => <ContactList contacts={contacts} />} />
        </Switch>
      </div>
    );
  }
}
export default App;
