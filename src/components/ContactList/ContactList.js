import React, { Component } from "react";

class ContactList extends Component {
    render() {
        return(
            <div className="contact">
                <img alt="profile_picture"></img>
                <h3>name</h3>
                <h4>email</h4>                
            </div>
        );
    }
}

export default ContactList;