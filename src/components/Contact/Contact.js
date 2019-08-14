import React, { Component } from 'react'

class Contact extends Component{
    render(){
        console.log(this.props)
        return(
            <div className='contact'>
                <img src={this.props.contact.profile_picture}/>
                <h3></h3>
                <h4></h4>
            </div>
        )
    }
}


export default Contact