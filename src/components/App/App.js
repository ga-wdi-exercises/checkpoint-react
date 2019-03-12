import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import ContactList from "../ContactList/ContactList";
import Contact from "../Contact/Contact";
import NewContact from "../NewContact/NewContact";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: props.contacts
    };
  }
  render() {
    console.log(this.state);

    return (
      <div className="App">
        {Header}
        <Route
          path="/"
          render={props => <ContactList {...props} {...this.state} />}
        />
        <Route path="/new-contact" component={NewContact} />
      </div>
    );
  }
}

export default App;
