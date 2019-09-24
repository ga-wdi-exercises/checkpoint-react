import React,  { Component } from "react";
import "./NewContact";

class Contact extends Component {
    render() {
        return (
            <div className="newcontact">
                <Link to="/newcontact">
                    <h1>New Contact</h1>
                </Link>
            </div>
        )
    }
}