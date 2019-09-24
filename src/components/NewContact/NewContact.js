import React, { Component } from 'react'

export default class NewContact extends Component {
    render() {
        return (
            <div>
                <h1>New Contact</h1>
                <form>
                    <input name="name"/>
                    <input name="email"/>
                    <input name="profile_picture"/>
                </form>
                
            </div>
        )
    }
}
