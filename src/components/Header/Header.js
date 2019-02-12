import React from "react";
// import { shallow, mount } from "enzyme";
import Header from "./Header";
import { Link } from "react-router-dom";

class Header extends Component {

    render () {
        return (
          <header>
            <h1>
                <Link to="/"></Link>
                <Link to="/new-contact"></Link>
            </h1>
            <nav>
                <Link to="/"></Link>
                <Link to="/new-contact"></Link>
            </nav>
          </header>
        )
      }
    }

    export default Header

