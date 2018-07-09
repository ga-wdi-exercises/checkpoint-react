import React, { Component } from 'react';
import Header from '../Header/Header'
import Contacts from '.../contacts.json'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			contacts: this.props.contacts
		}
	}
  render() {
  	let listOfContacts = Contacts.map(item => {
    return (
    	<div className="App">
    		<Header />
        	<p>{listOfContacts}</p>
      	</div>;
     ))
  }
  }
}

export default App;