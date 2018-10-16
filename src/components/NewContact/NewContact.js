import React, { Component } from 'react';

class NewContact extends Component {
    render() {
        return(
            <form>
                <h1>New Contact</h1>
                <input name='name' type='text'></input>
                <input name='email' type='text'></input>
                <input name='image' type='text'></input>
            </form>
        )
    }
}

export default NewContact;