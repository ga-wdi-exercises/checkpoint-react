import React from 'react'
import Contact from '../Contact/Contact'


class ContactList extends React.Component{

    render(){
        const contactList = this.props.contacts.map((contact , i) => {
            return(
                <Contact key={i} {...contact}/>
            )
        })
        return(
            <div className="contact-list">
                {contactList}
            </div>
        )
    }
}

export default ContactList