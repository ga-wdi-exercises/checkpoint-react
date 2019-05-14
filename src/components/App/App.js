import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ContactList from '../ContactList/ContactList';
import Header from '../Header/Header';
import NewContact from '../NewContact/NewContact';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: props.contacts
		};
	}
	render() {
		return (
			<div className="App">
				<p>app</p>
				<Header />
				<Route
					path="/"
					component={ContactList}
					render={(routerProps) => <ContactList {...routerProps} {...this.state} />}
				/>
				<Route
					path="/new-contact"
					component={NewContact}
					render={(routerProps) => <NewContact {...routerProps} {...this.state} />}
				/>
			</div>
		);
	}
}

export default App;
