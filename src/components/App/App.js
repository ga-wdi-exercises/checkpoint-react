import React, { Component } from 'react';
import Contact from '../Contact/Contact'
import ContactList from '../ContactList/ContactList'
import Header from '../Header/Header'
import { Route, Link, Switch} from 'react-router-dom'
//import Validator from './Validator';
//import ContactList from './'

class App extends Component {
    constructor(props){
        super(props)

        this.state ={
            contacts: this.props.contacts
        }
    }

  render() {
    return (<div className="App">
      <Header />
      <p>app</p>
      <ContactList/>
    </div>
    );}
}

export default App;



