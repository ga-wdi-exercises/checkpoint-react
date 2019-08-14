import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch, Redirect } from "react-router-dom";
import ContactsData from "../../contacts.json"
import Contact from '../Contact/Contact';


class ContactList extends Component {
    render() {
      return (
          <div className="contactlist">
              {/* //this needs to repeat */}
              <Contact />
          </div>
      );
    }
  }



export default ContactList;
