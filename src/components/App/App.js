import React, { Component } from "react";
import { Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // where contacts is the array of contacts from contacts.json
      contacts: this.props.contacts
    };
  }

  render() {
    // Should render a div with class name of app
    // Should render <Header /> Component
    // Should render <ContactList /> or <NewContact/> depending on route:
    //     If route is "/" then render <ContactList>
    //     If route is "/new-contact" then render <NewContact />

    return (
      <div className="app">
        <Header />
        <Route path="/" component={<ContactList />} />
        <Route path="/new-contact" component={<NewContact />} />
      </div>
    );
  }
}

export default App;
