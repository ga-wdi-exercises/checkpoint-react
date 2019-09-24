import React, { Component } from 'react'

export default class NewContact extends Component {
    render() {
        return (
            <div>
                <h1>New Contact</h1>

                
            </div>
        )
    }
}
const Input = (props) => {
    return (  
  <div className="New Contact">
    <label htmlFor={props.name} className="New Contact">{props.title}</label>
    <input
      className="New Contact"
      id={props.name}
      name={props.name}
      email={props.email}
      type={props.type}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder} 
    />
  </div>
)
}