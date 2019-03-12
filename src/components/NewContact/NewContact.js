import React, { Component } from 'react';

class NewContact extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            profile_picture: ''
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdate(event){
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(){
        console.log("!")
        const newContact = {
            name: this.state.name,
            email: this.state.email,
            profile_picture: this.state.profile_picture
        }
        this.props.pushContact(newContact)
    }

    render() {
        return (
            <div className="form" onSubmit={this.handleSubmit}>
                <h1>New Contact</h1>
                <form action="/">
                    <p>
                        <label for="name">Name</label>
                        <br/><input onChange={this.handleUpdate} type="text" name="name" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <br/><input onChange={this.handleUpdate} type="text" name="email" />
                    </p>
                    <p>
                        <label for="profile_picture">Image</label>
                        <br/><input onChange={this.handleUpdate} type="text" name="profile_picture" />
                    </p>
                    <p>
                        <input type="submit" placeholder="Submit"/>
                    </p>
                </form>
            </div>
        );
    }
}

export default NewContact;