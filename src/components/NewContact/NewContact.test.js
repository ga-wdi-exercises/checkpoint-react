import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import NewContact from "./NewContact";

let contact = {
  name: "Tweety",
  email: "tweety@gmail.com",
  profile_picture: "https://upload.wikimedia.org/wikipedia/en/0/02/Tweety.svg"
};

describe("Contact component:", () => {
  it("renders without crashing", () => {
    shallow(<NewContact />);
  });

  it("has a title", () => {
    const component = shallow(<NewContact />);
    expect(component.contains(<h1>New Contact</h1>)).toBe(true);
  });

  it("has a form", () => {
    const component = shallow(<NewContact />);
    expect(component.find("form").exists()).toBe(true);
  });

  it("has a name input", () => {
    const component = shallow(<NewContact />);
    expect(component.find("input[name='name']").exists()).toBe(true);
  });

  it("has an email input", () => {
    const component = shallow(<NewContact />);
    expect(component.find("input[name='email']").exists()).toBe(true);
  });

  it("has an image input", () => {
    const component = shallow(<NewContact />);
    expect(component.find("input[name='profile_picture']").exists()).toBe(true);
  });
});
