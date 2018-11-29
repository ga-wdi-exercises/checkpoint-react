import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import ContactList from "../ContactList/ContactList";
import NewContact from "../NewContact/NewContact";
import Contact from "../Contact/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: {
        name: null,
        email: null,
        img: null
      }
    };
    this.setContact = this.setContact.bind(this);
  }
  setContact(contact) {
    this.setState({
      contacts: {
        ...this.state.contacts,
        name: contact.name,
        email: contact.email,
        img: contact.img
      }
    });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <h1>Contacts</h1>
          <Link to="/">HOME</Link>
          <Link to="/new-contact">NEW CONTACT</Link>
        </nav>
        <main>
          <Route path="/" component={ContactList} />
          <Route path="/new-contact" component={NewContact} />
        </main>
      </div>
    );
  }
}

export default App;
