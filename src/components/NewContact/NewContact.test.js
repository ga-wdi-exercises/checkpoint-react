import React from "react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import NewContact from "./NewContact";


describe("Contact:", () => {
  it("renders without crashing", () => {
    shallow(<NewContact />);
  });
});
