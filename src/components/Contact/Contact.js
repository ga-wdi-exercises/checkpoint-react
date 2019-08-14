import React, { Component } from 'react'
import { throws } from 'assert';

class Contact extends Component {
    render() {
        return (<div className='contact'>
            <img src={this.props.contact.profile_picture}></img>
            <h3>name: {this.props.contact.name}</h3>
            <h4>email: {this.props.contact.email}</h4>
        </div>)
        }
}

export default Contact