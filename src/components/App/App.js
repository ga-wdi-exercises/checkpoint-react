import React, { Component } from "react";
import Header from "../Header/Header";
import ContactList from "../ContactList/ContactList";
import NewContact from "../NewContact/NewContact";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: props.contacts
    };
  }
  // Hammad showed me a better way to do this but I ran out of time to try implementing it here
  // so this array method will have to work for now vvv
  makeNewContact = contact => {
    let newArray = this.state.contacts;
    newArray.push(contact);
    this.setState({ contacts: newArray });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <ContactList contacts={this.state.contacts} {...props} />
            )}
          />
          <Route
            path="/new-contact/"
            render={props => (
              <NewContact makeNewContact={this.makeNewContact} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
