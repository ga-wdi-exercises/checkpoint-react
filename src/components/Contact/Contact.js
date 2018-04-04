import React, { Component } from 'react'

class Contact extends Component {
    constructor (props) {
        super(props)
    
        this.state = {
          contact: this.props.info
        }
      }
 render () {
         return (
            <div className='dog-preview'>
             <img src={this.state.contact.profile_picture} />
            <h3>{this.props.contact.name}</h3>
             <h3>{this.props.contact.email}</h3>
           </div>
         )
       }}
    
export default Contact


