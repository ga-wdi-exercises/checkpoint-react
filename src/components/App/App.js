import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Header from "../Header/Header";
import ContactList from "../ContactList/ContactList";
import newContact from "../NewContact/NewContact";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allContacts: props.contacts
    };
  }
  componentDidMount() {
    this.state.allContacts.map((contact, index) => {
      return <p key={index}>Name: {contact.name}</p>;
    });
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
          <Route path="/new-contact" component={newContact} />
        </Switch>
      </div>
    );
  }
}

export default App;
