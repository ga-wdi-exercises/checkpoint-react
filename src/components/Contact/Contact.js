import React, { Component } from "react";

class Contact extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="contact">
                    {this.props.contacts.map(c => {
                        return( 
                        <div>
                        <br></br>
                        <img src={c.profile_picture} alt={c.name}></img>
                        <h3>{c.name}</h3>
                        <h4>{c.email}</h4>
                        <br></br>
                        </div>
                        )
                    })}
            </div>
        )
    }
}

export default Contact;