import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch, Redirect } from "react-router-dom";
import ContactsData from "../../contacts.json"


class NewContact extends Component {
    render() {
      return (
          <div className="">
              <form> 
              <h1>New Contact</h1>
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" name="name"></input>
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input  type="email" name="email"></input>
                <br />
                <label htmlFor="profile_picture">Image</label>
                <br />
                <input type="url" name="profile_picture"></input>
                <br />
                <button>Submit</button>

              </form>

          </div>
      );
    }
  }



export default NewContact;




