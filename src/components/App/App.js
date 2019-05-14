import React, { Component } from 'react';
import ContactList from '../ContactList'
import NewContact from '../NewContact'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: props.contacts
    }
  }
  render() {
    return <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={ContactList} />
        <Route exact path='/new-contact' component={NewContact} />
      </Switch>
      <p>app</p>
    </div>;
  }
}

export default App;