import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch, Redirect } from "react-router-dom";
import ContactsData from "../../contacts.json"


class NewContact extends Component {
    render() {
      return (
          <div className="">
           <h1>New Contact</h1>
           <p>Name</p>
           <input></input>
           <p>Email</p>
           <input></input>
           <p>Image</p>
           <input></input>
           <br />
           <button>Submit</button>
          </div>
      );
    }
  }



export default NewContact;
