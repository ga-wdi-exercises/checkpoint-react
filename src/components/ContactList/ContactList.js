import React, { Component } from "react";
import Contact from "../../components/Contact/Contact";

class contactList extends Component {
  render() {
    return (
        <div class="contact-list">
          <Contact contacts={this.props.contacts} />
        </div>
      );
  }
}

export default contactList;