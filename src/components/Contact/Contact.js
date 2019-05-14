import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
            <form>
                <img src={this.props.item.name}></img>
                <h3>Name {this.props.item.profile_picture}</h3>
                <h4>email: {this.props.item.email}</h4>
                </form>
            </div>
        );
    }
}

export default Contact;