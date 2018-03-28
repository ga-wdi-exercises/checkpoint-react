import React, { Component } from 'react'

class Contact extends Component {
    constructor (props) {
      super(props)
  
      this.state = {
        contact: this.props.info
      }
    }
  
    render () {
      return (
        <div className='contact'>
          <img src={this.state.contact.profile_picture} alt={this.state.contact.name} className='contact-image' />
          <h3>{this.state.contact.name}</h3>
            <h4>email: {this.state.contact.email}</h4>
        </div>
      )
    }
  }
  
  export default Contact
  