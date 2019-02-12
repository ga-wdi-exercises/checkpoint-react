import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import Contact from "./Contact";

let contact = {
  name: "Tweety",
  email: "tweety@gmail.com",
  profile_picture: "https://upload.wikimedia.org/wikipedia/en/0/02/Tweety.svg"
};

describe("Contact component:", () => {
  it("renders without crashing", () => {
    shallow(<Contact contact={contact} />);
  });

  it("has a `contact` class", () => {
    const wrapper = shallow(<Contact contact={contact} />);
    expect(wrapper.hasClass("contact")).toEqual(true);
  });

  it("has an image, h3 and h4", () => {
    const wrapper = shallow(<Contact contact={contact} />);
    expect(
      wrapper.containsAnyMatchingElements([
        <img src={contact.profile_picture} alt="" />,
        <h3>{contact.name}</h3>,
        <h4>{contact.email}</h4>
      ])
    ).toEqual(true);
  });

  it("passes through props", () => {
    const wrapper = shallow(<Contact contact={contact} />);
    expect(wrapper.find("img").prop("src")).toBe(contact.profile_picture);
    expect(wrapper.find("h3").text()).toBe(contact.name);
    expect(wrapper.find("h4").text()).toBe(contact.email);
  });
});
