import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <img src={this.props.profilePicture} />
                <h1>{this.props.name}</h1>
                <h2>{this.props.email}</h2>
            </div>
        );
    }
}

export default Contact;