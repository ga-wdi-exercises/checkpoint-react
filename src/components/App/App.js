import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Header from "../Header/Header";
import ContactList from "../ContactList/ContactList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allContacts: props.contacts
    };
  }

  render() {
    return (
      <div className="App">
        <Route path="/header" component={Header} />
        <Switch>
          <Route
            exact
            path="/"
            render={routerProps => (
              <ContactList contacts={this.state.allContacts} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
