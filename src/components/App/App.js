import React, { Component } from "react";
import ContactList from "../ContactList/ContactList";
import NewContact from "../NewContact/NewContact";
import { Route, Link, Redirect } from "react-router-dom";
import Header from "../Header/Header";

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
        <Header />
        <Route
          path="/"
          exact
          render={routeProps => (
            <ContactList contacts={this.state.contacts} {...routeProps} />
          )}
        />
        <Route path="/new-contact" exact component={NewContact} />
        {/* <p>app</p> */}
      </div>
    );
  }
}

export default App;
