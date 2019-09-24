import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
            <img></img>
            <h3>Name</h3>
            <h4>Email</h4>
            </div>
        )
    }
}

class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        contacts: props.contacts
      }
    }
    render() { 
      return <div className="App">
            <div className="contact">
            <img></img>
            <h3>Name</h3>
            <h4>Email</h4>
            </div>        
        </div>;
    }
  }