import React, { Component } from "react";

class Contact extends Component {
  render() {
    let characters = this.props.driverData.map((characters, index) => {
      return (
        <div class="contact" key={index}>
          <img>{characters.profile_picture}</img>
          <h3>{characters.name}</h3>
          <h4>{characters.email}</h4>
        </div>
      );
    });
    return <div>{characters}</div>;
  }
}

export default Contact;
