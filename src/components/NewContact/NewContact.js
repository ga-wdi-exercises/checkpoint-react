import React, { Component } from 'react'


class NewContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            image: '',
            valid: true

        }
    }

    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    handleImage(e) {
        this.setState({
            email: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({ valid: true })
    }


    render() {
        let validText = this.state.valid ? "submit button worked" : "submit button DIDNT work"
        return (
            <div className="form">
                <h1>New Contact</h1>
                <input onChange={(e) => this.handleName(e)} type="text" placeholder="name" />
                <input onChange={(e) => this.handleEmail(e)} type="text" placeholder="email" />
                <input onChange={(e) => this.handleImage(e)} type="text" placeholder="image" />
                <input type="submit" onClick={(e) => this.handleSubmit(e)} value="Submit" />
                <p>{validText}</p>
            </div>
        )
    }
}

export default NewContact