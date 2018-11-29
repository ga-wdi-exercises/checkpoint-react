import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Contacts from "../Contact/Contact";
import ContactList from "../ContactList/ContactList";
import Header from "../Header/Header";
import Contact from "../Contact/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts
    };
  }
  render() {
    return (
      <div className="App">
        <header>
          <Link to="/">
            {" "}
            <h1>idk</h1>
          </Link>
          <nav>
            <Link to="/contact">Contact</Link>
            <Link to="/new-contact">Contactlist</Link>
          </nav>
        </header>

        <main>
          <Route path="/" component={Header} exact={true} />
          <Route path="/contact" component={Contact} exact={true} />
          <Route path="/contactlist" component={ContactList} exact={true} />
        </main>
      </div>
    );
  }
}

export default App;
