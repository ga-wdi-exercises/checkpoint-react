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
  }

  render() {
    return <div className="App">
      <Header />

      <p>app</p>
      <Switch>
        <Route path="/" exact render={() => <ContactList contacts={this.state.contacts} />} />
        <Route path="/new-contact" render={() => <NewContact />} />

      </Switch>

    </div>;
  }
}

export default App;