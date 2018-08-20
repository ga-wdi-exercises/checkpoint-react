import React, { Component } from 'react'
import {
    Link
  } from 'react-router-dom'

class ContactList extends Component {
    constructor(props) {
        super(props)


    }

    render() {

        return (
            <div className="contact-list">
                {this.props.contact}
            </div>
        )
    }


}

export default ContactList