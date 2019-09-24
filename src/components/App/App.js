import React, { Component } from 'react';
import Header from '../Header/Header'
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'
import { Route, Link } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      contacts: props.contacts
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <main>
          <Route
          path="/"
          exact
          render={props => <ContactList {...props} contacts={this.state.contacts}/>}
          />
          <Route
          path="/new-contact"
          exact
          render={props => <NewContact/>}
          />
        </main>
      </div>
    );
  }
}

export default App;