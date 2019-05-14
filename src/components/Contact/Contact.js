import React, { Component } from 'react';

class Contact extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='contact'>

            <img src={this.props.profile_picture} ></img>
            <h3>Name</h3>
            <h4>Email</h4>
                
            </div>
        );
    }
}

export default Contact;