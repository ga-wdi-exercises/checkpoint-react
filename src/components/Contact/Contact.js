import React, { Component } from 'react';

class Contact extends Component {
    render() {
        let contacts=this.props.contact
            return(
                <div className="contact-list">
                    <img src={contacts.profile_picture} alt={contacts.name}/>
                    <h3>{contacts.name}</h3>
                    <h4>{contacts.email}</h4>
                </div>
            )    
    }
};

export default Contact