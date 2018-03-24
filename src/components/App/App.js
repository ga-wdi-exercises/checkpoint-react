import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import ContactList from "../ContactList/ContactList";
import NewContact from "../NewContact/NewContact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {
        name: "",
        email: "",
        profile_picture: ""
      },
      contacts: []
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeUrl = this.handleChangeUrl.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({
      contact: { ...this.state.contact, name: event.target.value }
    });
  }

  handleChangeEmail(event) {
    this.setState({
      contact: { ...this.state.contact, email: event.target.value }
    });
  }

  handleChangeUrl(event) {
    this.setState({
      contact: { ...this.state.contact, profile_picture: event.target.value }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props);
    var newArray = this.state.contacts.slice();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return <ContactList contacts={this.state.contacts} />;
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
      </div>
    );
  }
}

export default App;
