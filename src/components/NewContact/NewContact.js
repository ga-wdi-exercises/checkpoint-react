import React, { Component } from 'react'

export default class NewContact extends Component {
    render() {
        return (
            <div>
                <h1>New Contact</h1>
                <input type="text" placeholder="name" ></input>
                <input type="text" placeholder="email" ></input>
                <input type="text" placeholder="profile_picture" ></input>
                
            </div>
        )
    }
}
