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
    return <div className="App">
      <Header />
      <Route path="/new-contact" component={
        props => <NewContact {...props} {...this.state} state={this.state} />} />
      <Route path="/" component={
        props => <ContactList {...props} {...this.state} state={this.state} />} />
    </div>;
  }
}

export default App;