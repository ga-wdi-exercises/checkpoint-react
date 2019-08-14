import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      contacts: props.contacts
    }
  }
  render() {
    return (
    <div className="App">
      <header className="appHeader">
        <p>app</p>
        </header>
        <main>
          <Switch>
            <Route exact path="/" render={(routerProps) => {return <ContactList {...routerProps} {...this.state} />}} />
            <Route exact path="/new-contact" render={(routerProps) => {return <NewContact {...routerProps} {...this.state} />}} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;