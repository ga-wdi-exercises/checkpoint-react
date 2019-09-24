import React, { Component } from 'react'

export default class ContactList extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.imgSrc}
          alt={this.props.imgAlt} />
        <div>
          {this.props.contactName}
        </div>
        <div>
        {this.props.contactEmail}
        </div>
      </div>
    )
  }
}

