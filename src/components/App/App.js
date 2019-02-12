import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Header from "../Header/Header";
import ContactList from "../ContactList/ContactList";
import NewContact from "../NewContact/NewContact";

class App extends Component {
  state = {
    contacts: this.props.contacts
  };
  render() {
    return (
      <div className="App">
        <p>App</p>
        <Header />
        <ContactList />
        <main>
          <Switch>
            <Route
              path="/"
              render={props => (
                <ContactList
                  {...this.state}
                  {...props}
                  contacts={this.props.contacts}
                />
              )}
            />
            <Route path="/new-contact" render={() => <NewContact />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
