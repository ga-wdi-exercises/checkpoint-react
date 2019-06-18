import React, { Component } from 'react';

class NewContact extends Component {

    handleForm = (e) => {
        e.preventDefault();
        this.props.history.push("/");
        return this.props.handleSubmit({
            name: e.target.name.value,
            email: e.target.email.value,
            profile_picture: e.target.profile_picture.value
        })
    }

    render() {
        return (
            <div>
                <h1>{"New Contact"}</h1>
                <form onSubmit={this.handleForm}>
                    {"Name"}<br />
                    <input type="text" name="name"/><br />
                    {"Email"}<br />
                    <input type="text" name="email"/><br />
                    {"Image"}<br />
                    <input type="text" name="profile_picture"/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default NewContact;