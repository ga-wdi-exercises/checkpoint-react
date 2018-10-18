import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { Route } from "react-router-dom";

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
