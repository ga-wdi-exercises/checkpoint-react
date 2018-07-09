import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import App from "./App";
import { Route } from "react-router-dom";
import ContactList from "../ContactList/ContactList";

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe("App component:", () => {
  it("has a `.App` class", () => {
    const component = shallow(<App />);
    expect(component.hasClass("App")).toEqual(true);
  });

  it("has two React Router Routes", () => {
    const component = shallow(<App />);
    expect(component.find(Route).length).toEqual(2);
  });
});
