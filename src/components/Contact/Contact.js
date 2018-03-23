import React, { Component } from "react";

class Contact extends Component {
  constructor() {
    super(props);
    this.state = {
      image: this.props.image,
      name: this.props.name,
      email: this.props.email
    };
  }
  render() {
    <div>
      <img src={this.state.imageUrl} alt={this.state.name} />
      <h3>{this.state.name}</h3>
      <h4>{this.state.email}</h4>
    </div>;
  }
}

export default Contact;
