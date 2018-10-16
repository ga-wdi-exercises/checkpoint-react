import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
    <div className='contact'>
    <img href='#'>Profile Pic</img>
    <div><img src={'http://placehold.it/400x20&text=slide1'} alt="boohoo" className="img-responsive"/><span>Hello {this.props.name}</span></div>;
    }
    <h3>Name</h3>
   
    <h4>Email Address</h4>
      </div>
    );
  }
}

export default Contact 