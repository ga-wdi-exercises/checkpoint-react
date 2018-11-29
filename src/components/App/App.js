import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts
    };
    this.setContacts = this.setContacts.bind(this);
  }
  render() {
    return (
      <div className="App">
        <p>app</p>
        <main>
          <Route path="/" exact component={Header} />
          <Route path="/" exact component={ContactList} />
        </main>
      </div>
    );
  }
}

export default App;
