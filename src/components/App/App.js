import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return <div className="App">
        <p>app</p>
      </div>;
  }
}

render() {
  return (
    <div className="App">
      <header>
        <nav>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/new-contact">
          <h1>New Contact</h1>
        </Link>
      </nav>
      </header>
      
      <main>
      <Route exact path="/"
          render={(routerProps) => 
          <Home ContactList={this.state.name} {...routerProps} /> }
            />
      <Route path="/new-contact"
            render={(routerProps) => 
            <New Contact Name={this.state.name} Email={this.state.email} Profile_Picture={this.state.profile_picture} {...routerProps} /> }
            />
      </main>
        </div>
          )
        }
export default App;