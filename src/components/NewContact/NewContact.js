import React, { Component } from 'react';

class NewContact extends Component {
    render() {
        return (
            <div>
                <h1>New Contact</h1>
                <form>
                    <input type="text" name="name"></input>
                    <input type="text" name="email"></input>
                    <input type="text" name="profile_picture"></input>
                </form>
            </div>
        );
    }
}

export default NewContact;