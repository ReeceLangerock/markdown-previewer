import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { Button } from "./../components/Button";
import { shallow, mount, find, render, simulate } from "enzyme";

const initialState = { text: "" };

const mockStore = configureStore();

describe("Button", () => {
  let component;
  beforeEach(() => {
    const props = {
      buttonName: "test button"
    };
    component = mount(<Button {...props} />);
  });

  it("has the correct class", () => {
    expect(component.hasClass("Button")).toEqual(true);
  });

  it("has a button", () => {
    expect(component.find("button").length).toBe(1);
  });

  it("displays the correct button text", () => {
    expect(component.instance().props.buttonName).toBe("test button");
  });
});
