import React, { Component } from 'react';


class Contact extends Component {

  render() {
    return (
    <div className="contact">
    <h1>Contact</h1>
    <form>
        <image src="" alt=""></image>
        <h3>Name:{this.props.contacts}</h3>
        <h4>Email:{this.props.contacts}</h4>
    </form>
       
      </div>
      )
  }
}

export default Contact;