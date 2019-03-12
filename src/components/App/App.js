import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "../Header/Header";
import ContactList from "../ContactList/ContactList";
import NewContact from "../NewContact/NewContact";

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
        {/* Routes */}
        <Switch>
          <Route path="/" exact render={() => <ContactList {...this.state} />} />{" "}
          <Route path="/new-contact" component={NewContact} />
        </Switch>
      </div>
    );
  }
}

export default App;
