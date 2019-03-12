import React, { Component } from 'react';

class NewContact extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            profile_picture: ''
    }
}
    render() {
        return (
            <div className="form" onSubmit={this.handleSubmit}>
                <h1>New Contact</h1>
                <form>
                    <input onChange={this.updateEmail} type="text" placeholder="name" name="name" />
                    <input onChange={this.updatePassword} type="text" placeholder="email" name="email" />
                    <input onChange={this.updatePasswordConf} type="text" placeholder="picture URL" name="profile_picture" />
                    <input type="submit" placeholder="Submit" />
                </form>
            </div>
        );
    }
}

export default NewContact;