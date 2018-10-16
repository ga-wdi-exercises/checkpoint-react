import React, { Component } from "react";
import Header from "../Header/Header";
import ContactList from "../ContactList/ContactList";
import NewContact from "../NewContact/NewContact";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts
    };
    this.addContact = this.addContact.bind(this)
  }

  addContact() {
    let contacts1 = this.state.contacts
    this.setState({
      contacts: contacts1.concat(newContact)
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route
              path="/"
              render={props => <ContactList {...props} {...this.state} />}
            />
            <Route
              path="/new-contact"
              render={props => <NewContact {...props} {...this.state} addContact={this.addContact}/>}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
