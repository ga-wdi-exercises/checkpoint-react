import React, { Component } from "react";
import "../../styles/index.css";
import Header from "../Header/Header";
import ContactList from "../ContactList/ContactList";
import Contact from "../Contact/Contact";
import NewContact from "../NewContact/NewContact";
import { Link, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: props.contacts
    };
  }

  render() {
    return (
      <div className="App">
        <header>{Header}</header>
        <main>
          <Route path={"/"} exact component={ContactList} />
          <Route path={"/new-contact"} exact component={NewContact} />
        </main>
      </div>
    );
  }
}

export default App;
