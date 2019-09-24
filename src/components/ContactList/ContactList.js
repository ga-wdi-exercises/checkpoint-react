import React, { Component } from 'react';

class ContactList extends Component{
    constructor(props){
        super(props)
    }

    render(){
        let character
        this.props.contacts.ContactData.map((character, index) =>{
            character.name
            character.profile_picture
        }
        )

        return(
            <img src={character.profile_picture} alt={character.name}></img>
        )
    }
}

export default ContactList