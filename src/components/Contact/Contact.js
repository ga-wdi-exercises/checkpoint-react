import React, { Component } from "react";
import ContactsData from "../../contacts.json";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsD: [ContactsData]
    };
  }
  render() {
    return ContactsData.map(data => {
      return(
        <div className="contact" key={data}>
            <img src={data.profile_picture} alt={"profile picture"}></img>
            <h3>{data.name}</h3>
            <h4>{data.email}</h4>
        </div>
      ) 
    });
  }
}

export default Contacts;
