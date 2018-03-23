import React, { Component } from 'react';

class NewContact extends Component {
    render() {
        return (
            <div>
                <h1>New Contact</h1>
                <form action="/" >
                <label>Name: </label>
                <input type="text" name="name" />
                <label>Email: </label>
                <input type="text" name="email" />
                <label>Picture: </label>
                <input type="text" name="profile_picture" />
                </form>
            </div>
        );
    }
}

export default NewContact;