import React, { Component } from "react";
import Header from "../Header/Header";
import ContactList from "../ContactList/ContactList";
import NewContact from "../NewContact/NewContact";
import { Route, Router, Switch } from "react-router-dom";

// import contacts from "./contacts.json";
// I feel like my contacts is breaking everything

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // where contacts is the array of contacts from contacts.json
      contacts: this.props.contacts
    };
  }
  componentDidMount() {
    this.setState({
      contacts: this.props.contacts
    });
  }

  render() {
    // Should render a div with class name of app
    // Should render <Header /> Component
    // Should render <ContactList /> or <NewContact/> depending on route:
    //     If route is "/" then render <ContactList>
    //     If route is "/new-contact" then render <NewContact />

    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              render={routerProps => (
                <ContactList {...routerProps} {...this.state} />
              )}
            />
            <Route path="/new-contact" component={NewContact} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
