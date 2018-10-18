import React from "react";
import { shallow, mount } from "enzyme";
import Header from "./Header";
import { Link } from "react-router-dom";

describe("Header component:", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it("has a title and nav", () => {
    const component = shallow(<Header />);
    expect(component.find("h1")).toBeDefined();
    expect(component.find("nav")).toBeDefined();
  });

  it("has two React Router Links", () => {
    const component = shallow(<Header />);
    expect(component.find(Link).length).toEqual(2);
  });
});
