import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

class Header extends Component {
}
  render() {
    return (<div className="App">
        <header>
            
        </header>
        <nav>
        <h1><Link to="/">Home</Link></h1>
        <h1><Link to="/about">About</Link></h1>
        </nav>
      </div>
      )
  }
}

export default App;