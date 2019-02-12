import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NewContact extends Component {
    render() {
        return (
            <div>
                <h1>New Contact</h1>
                <form>
                    <input type="text" name="name" value="name">name</input>
                    <input type="text" name="email">email</input>
                   <input type="image"></input>
                </form>
            </div>
        );
    }
}

export default NewContact;