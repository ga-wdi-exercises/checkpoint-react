import React, { Component } from 'react'

export default class NewContact extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: null,
            email: null,
            profile_picture: null,
        }
    }
    handleChange(evt) {
        this.setState({
            email:
        })
    }
    render() {
        return (
            <div>
                <h1>New Contact</h1>
                <input type="text" placeholder="name" onChange={this.handleChange}></input>{<br></br>}
                <input type="text" placeholder="email" onChange={this.handleChange}></input>{<br></br>}
                <input type="text" placeholder="profile_picture" onChange={this.handleChange}></input>

                <button onClick={this.createContact}>Submit</button>
                
            </div>
        )
    }
}
