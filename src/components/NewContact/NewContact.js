import React, { Component } from "react"
// import { Link } from 'react-router-dom'

class NewContact extends Component {
    render() {
        return (
            <div>
                <h1>New Contact</h1>
                <form>
                    <input type="text" placeholder="name"></input>
                    <input type="text" placeholder="email"></input>
                    <input type="text" placeholder="profile_picture"></input>
                </form>
            </div>
        )
    }
}

export default NewContact
