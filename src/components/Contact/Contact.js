import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return <div className="contact">
        
        <input type="text" placeholder="name"></input>
        <input type="exmail" placeholder="email"></input>
        <input type="image" id="img"></input>
        <h3>Test</h3>
        <h4>SmallerTest</h4>
        <img src="https://upload.wikimedia.org/wikipedia/en/f/fe/Speedy_Gonzales.svg"></img>
      </div>;
  }
}

export default Contact;