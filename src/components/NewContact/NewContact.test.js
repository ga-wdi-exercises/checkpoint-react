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
    expect(component.find("input[name='image']").exists()).toBe(true);
  });

  // it("should have a state attribute for the name that should update when the user types in an input", () => {
  //   const component = shallow(<NewContact />);

  //   expect(component.state("name")).toBe("");
  //   component
  //     .find("input[name='name']")
  //     .simulate("change", { target: { value: contact.name } });
  //   expect(component.state("name")).toBe(contact.name);
  // });

  // it("should have a state attribute for the name that should update when the user types in an input", () => {
  //   const component = shallow(<NewContact />);

  //   expect(component.state("email")).toBe("");
  //   component
  //     .find("input[name='email']")
  //     .simulate("change", { target: { value: contact.email } });
  //   expect(component.state("email")).toBe(contact.email);
  // });

  // it("should have a state attribute for the name that should update when the user types in an input", () => {
  //   const component = shallow(<NewContact />);

  //   expect(component.state("image")).toBe("");
  //   component
  //     .find("input[name='image']")
  //     .simulate("change", { target: { value: contact.profile_picture } });
  //   expect(component.state("image")).toBe(contact.profile_picture);
  // });
});
