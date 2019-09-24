import React, { Component } from 'react'


export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <h3>{this.props.contacts.name}</h3>
                <h4>{this.props.contacts.email}</h4>
                <img src={this.props.contacts.profile_picture}></img>
            </div>
        )
    }
}
