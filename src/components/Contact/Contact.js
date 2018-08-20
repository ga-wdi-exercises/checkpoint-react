import React, { Component } from 'react';

class Contact extends Component  {
    constructor(props){
        super(props)
        this.state = {
            contact: this.props.data
        }
    }
    render(){
        return(
            <div className="contact">
                <img src={this.state.contact.image}/>
                <h3>{this.state.contact.name}</h3>
                <h4>{this.state.contact.email}</h4>
            </div>
        )
    }
}

export default Contact