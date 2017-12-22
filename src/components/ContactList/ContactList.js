import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from "react-router-dom"

class ContactList extends Component {
  constructor(props){
    super(props)
    this.state = {
      contacts: []
    }
  }

  componentDidMount(){
      let url = "../checkpoint-react/contacts.json" + this.state
      $.ajax({ url, method: "GET", dataType: "json" }).then((response) => {
        this.setState({ contacts: response })
      })
    }

  render() {
    return <div className="Contact-list">
          <div>

        <li>Contact: {this.state.contacts}</li>

        </div>
      </div>;
  }
}

export default ContactList;
