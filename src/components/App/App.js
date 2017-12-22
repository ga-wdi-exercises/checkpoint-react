import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ContactList from "./../ContactList/ContactList";
import NewContact from "./../NewContact/NewContact";
import Header from "./../Header/Header";
import contacts from "./../../contacts.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts
    };
    this.handleNewContact = this.handleNewContact.bind(this);
  }
  handleNewContact(newContact) {
    let tempArray = this.state.contacts;
    tempArray.push(newContact);
    this.setState({
      contacts: tempArray
    });
    this.props.history.push("/");
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <ContactList contacts={this.state.contacts} />}
          />
          <Route
            path="/new-contact"
            render={() => (
              <NewContact handleNewContact={this.handleNewContact} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
