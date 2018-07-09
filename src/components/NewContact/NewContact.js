import ReactDOM from "react-dom";
import NewContact from "./NewContact";
import React, { Component } from 'react';

class NewContact extends Component {
    constructor (props) {
    super(props)
    this.state = {
        // where contacts is the array of contacts from contacts.json
        contacts: this.props.contacts
      }
    render() {
    
      return (
<div>
<div className="App">
<p>
<Link to="/">View ContactList</Link>
<Switch>
<Route
path="/header"
component={Header}
/>
<Route
path= "/new-contact"
render={(routerParams) => {
return<NewContact
contacts={this.contacts}
{...routerParams}
{...this.state}
/>}
}
/>
<Route
path="/"
component={ContactList}
/>  
</Switch>
</p>
</div>
</div>;

}
    }
  ReactDOM.render(< NewContact />, document.getElementById('root'));
