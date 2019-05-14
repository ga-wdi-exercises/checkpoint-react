import React, { Component } from 'react';

class NewContact extends Component {
    render() {
        return (
            <div>
                <h1>New Contact</h1>
                <form>
                    <input type="text" name="name"></input>
                    <input type="text" name="email"></input>
                    <input type="text" name="image"></input>
                    <input type="button" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default NewContact;