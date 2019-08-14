import React from 'react'

class Contact extends React.Component{

    render(){
        
        return(
            <div className = "contact">
                    <img src={this.props.profile_picture}/>
                    <h3>{this.props.name}</h3>
                    <h4>{this.props.email}</h4>
            </div>
        )
    }
}

export default Contact