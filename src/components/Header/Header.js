import React, {Component} from 'react'
import { Route, Link } from "react-router-dom";


class Header extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div>
                <header>CheckPoint React</header>
                <nav>
                    <Link to="/">HomePage</Link>
                    <Link to="/new-contact">New Conacts</Link>
                </nav>
            </div>
        )
    }
}
export default Header