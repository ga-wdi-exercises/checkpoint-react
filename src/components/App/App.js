import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from '../Header/Header'
import Contact from '../Contact/Contact'

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        contacts: props.contacts
      };
    }

  render() {
    return 	<div className="App">
		<Header />
        <Switch>
			<Route path="/" exact 
				render={props => (
					<Contact contacts={this.state.contacts}/>
				)}>
			</Route>
				{/* <Route path="/" exact component={ContactList}>

				</Route >
				<Route path="/new-contact" exact component={NewContact}>

				</Route> */}
		</Switch>

     		</div>;
  }
}

export default App;