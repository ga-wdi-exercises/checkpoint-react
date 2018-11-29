import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "../Header/Header";
import ContactList from "../ContactList/ContactList";
import NewContact from "../NewContact/NewContact";
import "../../styles/index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts
    };
    this.addNewContact = this.addNewContact.bind(this);
  }

  addNewContact(contact) {
    // this.setState({
    //   contacts: {
    //     ...this.state.contacts,
    //     contact
    //   }
    // });
    console.log("This should be implemented");
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <main>
          <Route
            path="/"
            exact={true}
            render={() => <ContactList contacts={this.state.contacts} />}
          />
          <Route
            path="/newcontact"
            render={routerProps => (
              <NewContact addNewContact={this.addNewContact} />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
