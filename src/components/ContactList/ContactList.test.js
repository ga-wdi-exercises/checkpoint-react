import React from "react";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import ContactList from "./ContactList";
import Contact from "../Contact/Contact";

import contacts from "../../contacts.json";

describe("ContactList component:", () => {
  it("renders without crashing", () => {
    shallow(<ContactList contacts={contacts} />);
  });

  it("has a `.contact-list` class", () => {
    const component = shallow(<ContactList contacts={contacts} />);
    expect(component.hasClass("contact-list")).toEqual(true);
  });

  it(`should contain ${contacts.length} contacts`, () => {
    const component = shallow(<ContactList contacts={contacts} />);
    expect(component.find(Contact).length).toEqual(contacts.length);
  });
});
