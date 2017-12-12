import React from "react";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import ContactList from "./ContactList";

import contacts from "../../contacts.json";

describe("ContactList:", () => {

  it("renders without crashing", () => {
    shallow(<ContactList contacts={contacts}/>);
  });

  it('has a `.contact-list` class', () => {
    const wrapper = shallow(<ContactList contacts={contacts} />);
    expect(wrapper.hasClass('contact-list')).toEqual(true)
  })

});
