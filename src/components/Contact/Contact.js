import React, { Component } from 'react';

class Contact extends Component {
    constructor(props){
        super(props)
        this.state = { picture: props.info.profile_picture,
                       name: props.info.name,
                       email: props.info.email
                    }
    }
    render() {
        return (
            <div className="contact">
                <img src={this.state.picture} alt={this.state.name}/>
                <h3>{this.state.name}</h3>
                <h4>{this.state.email}</h4>
            </div>
        );
    }
}

export default Contact;