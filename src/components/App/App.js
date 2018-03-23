import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import ContactList from "../ContactList/ContactList";
import NewContact from "../NewContact/NewContact";
import Contact from "../Contact/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: {
        name: "",
        email: "",
        imgUrl: ""
      }
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeUrl = this.handleChangeUrl.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({
      contacts: { ...this.state.contacts, name: event.target.value }
    });
  }

  handleChangeEmail(event) {
    this.setState({
      contacts: { ...this.state.contacts, email: event.target.value }
    });
  }

  handleChangeUrl(event) {
    this.setState({
      contacts: { ...this.state.contacts, imgUrl: event.target.value }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route
                path="/contact-list"
                render={props => {
                  return <ContactList contacts={this.contacts} />;
                }}
              />
              <Route
                path="/new-contact"
                render={props => {
                  return (
                    <NewContact
                      handleChangeUrl={this.handleChangeUrl}
                      handleChangeName={this.handleChangeName}
                      handleChangeEmail={this.handleChangeEmail}
                      handleSubmit={this.handleSubmit}
                    />
                  );
                }}
              />
            </Switch>
          </main>

          <Contact />
        </div>
      </Router>
    );
  }
}

export default App;
