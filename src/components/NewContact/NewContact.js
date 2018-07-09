import React, { Component } from 'react';

class NewContact extends Component {
    render() {
        return (
            <div>
                <h1>New Contact</h1>
                <form>
                    <label for="name">Name</label>
                    <input type="text"></input>
                    <label for="email">Email</label>
                    <input type="email"></input>
                    <label for="image">Profile_Picture</label>
                    <input type="image" alt="profile_pic"></input>
                    <input type="submit" name="Submit"></input>
                </form>
            </div>
        );
    }
}

export default NewContact;