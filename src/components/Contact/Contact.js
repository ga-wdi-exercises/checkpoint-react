import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch, Redirect } from "react-router-dom";
import ContactsData from "../../contacts.json"



class Contact extends Component {
    render() {
      return (
          <div className="contactContainer">
              <img className="contactIMG" src=""></img>
              <p className="contactName" >temp name</p>
              <p className="contactEmail">temp@email.com</p>
           
          </div>
      );
    }
  }





export default Contact;




