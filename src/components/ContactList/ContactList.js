import React, { Component } from "react";

class ContactList extends Component {
    contructor(props) {
        super(props)
        this.state = {
            contacts: this.props.info
        }
    }
    render() {
        <div className="contact-list">
            <Contact />
        </div>
    }
}

export default ContactList;
