import React, { Component } from 'react';
import Contact from '../Contact/Contact'

class NewContact extends Component {
    render() {
        return (
            <div>
                <h1>New Contact</h1>
                <form>
                    <div><input type="text" name="name" placeholder="name" /></div>
                    <div><input type="text" name="email" placeholder="email" /></div>
                    <div><input type="url" name="profile_picture" placeholder="profile picture" /></div>
                    <div><input type="submit" name="submit" placeholder="submit" /></div>
                </form>
            </div>
        );
    }
}

export default NewContact;