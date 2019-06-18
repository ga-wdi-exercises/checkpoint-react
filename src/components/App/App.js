import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

import Header from "../Header/Header"
import NewContact from "../NewContact/NewContact"
import ContactList from "../ContactList/ContactList"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: props.contacts
    }
  }

  render () {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/new-contact" render={
              props => <NewContact setPrice={this.setPrice} {...props} {...this.state} state={this.state} />} />
            <Route path="/" render={
              props => <ContactList setPrice={this.setPrice} {...props} {...this.state} state={this.state} />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;