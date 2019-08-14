import React, { Component } from 'react'
import Contact from '../Contact/Contact'

class ContactList extends Component{
    render(){
    // let contacts = this.props.contacts.forEach(contact => {}
        //     <Contact contact ={contact}/>
        // })
        return(
            <div className='contact-list'>
                <Contact contact={this.props}/>
                <Contact contact={this.props}/>
                <Contact contact={this.props}/>
                <Contact contact={this.props}/>
                <Contact contact={this.props}/>
                <Contact contact={this.props}/>
                <Contact contact={this.props}/>
                <Contact contact={this.props}/>
                <Contact contact={this.props}/>
                <Contact contact={this.props}/>
                <Contact contact={this.props}/>
                <Contact contact={this.props}/>
                <Contact contact={this.props}/>
                <Contact contact={this.props}/>


            </div>
        )
    }
}




export default ContactList