import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch, Redirect } from "react-router-dom";
import ContactsData from "../../contacts.json"



class Contact extends Component {
    render(props) {
        let ContactsData = this.props.ContactsData
        console.log(ContactsData)
      return (
          <div className="contact">
              <img className="contactIMG" src={ContactsData[1].profile_picture}></img>
              <h3 className="contactName" >{ContactsData[1].name}</h3>
              <h4 className="contactEmail">{ContactsData[1].email}</h4>
           
          </div>
      );
    }
  }





export default Contact;




