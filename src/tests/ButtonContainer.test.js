import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { ButtonContainer } from "./../components/ButtonContainer";
import Button from "./../components/Button";

import { shallow, mount, find, render, simulate } from "enzyme";

const initialState = { text: "" };

const mockStore = configureStore();

describe("ButtonContainer", () => {
  let component;
  beforeEach(() => {
    component = shallow(<ButtonContainer />);
  });

  it("has the correct class", () => {
    expect(component.hasClass("ButtonContainer")).toEqual(true);
  });

  it("has  3 buttons", () => {
    expect(component.find(Button).length).toBe(3);
  });
});
