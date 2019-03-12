import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import ContactList from "../ContactList/ContactList";
import NewContact from "../NewContact/NewContact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: props.contacts
    };
    this.showInfo = this.showInfo.bind(this);
  }
  showInfo(contacts) {
    this.setState({ contacts: contacts });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Route
          path="/"
          render={props => (
            <ContactList
              {...props}
              showInfo={this.showInfo}
              {...this.state.contacts}
            />
          )}
        />
        <Route path="/new-contact" render={props => <NewContact />} />
      </div>
    );
  }
}

export default App;
