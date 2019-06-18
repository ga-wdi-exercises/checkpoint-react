import React, { Component } from "react";
import "../../styles/index.css";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import data from "../../contacts.json";

class NewContact extends Component {
  render() {
    return (
      <div>
        <h1>New Contact</h1>
        <form>
          <h3>Name</h3>
          <input type="text" />
          <h3>Email</h3>
          <input type="text" />
          <h3>Image</h3>
          <input type="text" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewContact;
