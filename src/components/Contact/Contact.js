import React, { Component } from 'react';

class Contact extends Component {
constructor(props){
    super(props)
    this.state = ({
        img: null,
    })
}
    render() {
        return (
            <div className="contact">
                <img src=""></img>
                <h3></h3>
                <h4></h4>
            </div>
        );
    }
}
export default Contact;