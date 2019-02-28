import React, { Component } from 'react';

class Contact extends Component {
  
  constructor(props) {
    super(props);
    console.log("Constructor");
    console.log(this.props.contact);
    
    this.state = { contact: this.props.contact };
  }
  
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    console.log(nextProps.contact);
    this.setState({ contact: nextProps.contact });
  }
  
  render() {
    return <div className="contact">
      	<img src={this.state.contact.profile_picture} />
        <h3>{this.state.contact.name}</h3>
        <h4>{this.state.contact.email}</h4>
      </div>;
  }
}

export default Contact;