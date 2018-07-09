import React, { Component } from 'react';
import App from "./App";
import { Route, Link, Switch } from "react-router-dom";
import ContactList from "../ContactList/ContactList";
import  Header  from "../Header";
import { NewContact } from "NewContact";

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // where contacts is the array of contacts from contacts.json
      contacts: this.props.contacts
    }
    this.contacts= this.contacts.bind(this)
  }

  render() {
    return (
    <div>
          <div className="App">
          <p>
          <Link to="/">View ContactList</Link>
          <Switch>
          <Route
          path="/header"
          component={Header}
         />
         <Route
          path= "/new-contact"
          render={(routerParams) => {
          return<NewContact
          contacts={this.contacts}
          {...routerParams}
          {...this.state}
          />}
        }
        />
          <Route
          path="/"
          component={ContactList}
         />  
</Switch>
        </p>
     </div>
      </div>;
  
}

export default {App, ContactList};