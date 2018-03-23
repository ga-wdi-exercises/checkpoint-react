import React, { Component } from "react";
import Header from ".Header/Header";
import ContactList from ".ContactList/ContactList";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: this.props.contacts
    };
  }

  render() {
    return (
      <div className="App">
        <p>{this.props.contacts}</p>
        {/* insert header, contactlist or newcontact with routers */}
        <Header />
        <ContactList />
        <Route
          path="/"
          render={props => {
            return <ContactList />;
          }}
        />
        {/* Trying to fix problems by commenting out unresolved thingies */}
        {/* <Route
          path="/new-contact"
          render={props => {
            return <NewContact />;
          }}
        /> */}

        {/* <NewContact /> */}
      </div>
    );
  }
}

export default App;
