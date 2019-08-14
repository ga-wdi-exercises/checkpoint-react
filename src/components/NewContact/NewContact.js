import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch, Redirect } from "react-router-dom";
import ContactsData from "../../contacts.json"


class NewContact extends Component {
    render() {
      return (
          <div className="">
           <h3>NewContact header</h3>
           <p>NewContact p</p>
          </div>
      );
    }
  }



export default NewContact;
