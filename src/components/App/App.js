import React, { Component } from 'react'
import Contact from './components/Contact'
import ContactList from './components/ContactList'
import Header from './components/Header'
import NewContact from './components/NewContact'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<ContactList />
				<p>Hi {this.props.contacts}</p>
			</div>
		)
	}
}

export default App
