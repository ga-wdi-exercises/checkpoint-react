import React, { Component } from "react";
import Header from "../Header/Header";
import ContactList from "../ContactList/ContactList";

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
        <ContactList />
        <p>app</p>
        <Route path="/" component={ContactList} />
      </div>
    );
  }
}

export default App;
