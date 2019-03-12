import React, { Component } from "react";
import Header from "../Header/Header";
import ContactList from "../ContactList/ContactList";
import NewContact from "../NewContact/NewContact";
import { Route, Redirect } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts
    };

    this.addContact = this.addContact.bind(this);
  }

  addContact(newContact){
    let oldContactList = this.state.contacts;
    console.log("AddContact method called in AppJS: ", oldContactList);
    let newContactList = oldContactList.push(newContact);
    this.setState({
      newContactList
    });
  }



  render() {
    return (
      <div className="App">
        <div>
          <p>app</p>
          <Header />
          <Route path="/" exact render={(props) => <ContactList contacts={this.state.contacts} /> } />
          <Route path="/new-contact" exact render={(props) => <NewContact addContact={this.addContact} />} />
        </div>
      </div>
    );
  }
}

export default App;
