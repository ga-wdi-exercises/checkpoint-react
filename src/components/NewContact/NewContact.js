import React, { Component } from 'react';


class NewContact extends Component {
   constructor(props) {
      super(props)
      this.state = {
         contacts: this.props.state.contacts,
         name: '',
         email: '',
         image: '',
      }
   }


   updateState = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
         [name]: value
      })

   }

   onSubmit = (event) => {
      event.preventDefault();
      let newContact = {
         name: this.state.name,
         email: this.state.email,
         image: this.state.image
      }
      this.setState({
         contacts: this.props.state.contacts.push(newContact),
      })
      console.log(this.state)
      this.props.history.push("/");
   }

   render () {
      return (
         <div>
            <h1>New Contact</h1>
            <form>

               <span className="label">Name</span>
               <input className="text-input" name="name" onChange={this.updateState} value={this.state.name} type="text" />

               <span className="label">Email</span>
               <input className="text-input" name="email" onChange={this.updateState} value={this.state.genus} type="text" />

               <span className="label">Image</span>
               <input className="text-input" name="image" onChange={this.updateState} value={this.state.image} type="text" />

               <input className="button" name="submit" onClick={this.onSubmit} type="submit" value="submit" />
            </form>
         </div>
      );
   }
}

export default NewContact;