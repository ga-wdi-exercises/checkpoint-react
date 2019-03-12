import React, { Component } from 'react';

class NewContact extends Component {
    render() {
        return (
            <div>
                <h1>New Contact</h1>
                <form onSubmit={this.props.addBird}>
                    <p> Name</p>
                    <input type="text" name="name" onChange={this.props.changeHandler} />
                    <p> Email</p>
                    <input type="text" name="email" onChange={this.props.changeHandler} />
                    <p> Profile Picture</p>
                    <input type="text" name="profile_picture" onChange={this.props.changeHandler} />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default NewContact;
