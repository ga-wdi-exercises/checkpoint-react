import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import Header from "./Header";

describe("Header:", () => {

  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it('has a title and nav', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1')).toBeDefined()
    expect(wrapper.find('nav')).toBeDefined()
  })

});
