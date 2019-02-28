import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Header from "../Header/Header"
import ContactList from '../ContactList/ContactList'
import NewContact from '../NewContact/NewContact'
import Contact from '../Contact/Contact'
class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return <div className="App">
      <Header />
      <Route
        exact
        path="/"
        render={routerProps => <ContactList {...routerProps} />}
      />
      <Route
        exact
        path="/"
        render={routerProps => <NewContact {...routerProps} />}
      />
      <Contact Contact={Contact} />
      <p>app</p>
    </div>;
  }
}

export default App;