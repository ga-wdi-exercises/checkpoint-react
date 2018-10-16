import React, { Component } from 'react';

class NewContact extends Component {
    render() {
        return (
            <div>
                <h1>New Contact</h1>
                <form>
                    <input id="name" type="text" onChange={this.handleChange}></input>
                    <input id="email" type="text" onChange={this.handleChange}></input>
                    <input id="profile_picture" type="text" onChange={this.handleChange}></input>
                </form>
            </div>
        );
    }
}

export default NewContact;