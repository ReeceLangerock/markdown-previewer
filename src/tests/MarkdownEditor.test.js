import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { MarkdownEditor } from "./../components/MarkdownEditor";
import { shallow, mount, find, render, simulate } from "enzyme";
const initialState = {};
let mockStore = configureStore(initialState);

describe("MarkdownEditor", () => {
  let component;
  beforeEach(() => {
    component = mount(<MarkdownEditor store={mockStore} />);
  });

  it("has the correct class", () => {
    expect((component).hasClass("MarkdownEditor")).toEqual(true);
  });

  it("has a text area", () => {
    expect(component.find("textarea").length).toBe(1);
  });

  // DON'T KNOW WHY THIS ISN'T WORKING
  // describe("handles text entry", () => {
  //   let text;

  //   beforeEach(() => {
  //     text = "** dummy markdown text";
  //     component.find("textarea").simulate("change", text);
  //   });

  //   it("shows that text in the text area", () => {
  //     console.log(component.find("textarea").props);
  //     expect(component.find("textarea").node.value).toEqual(text);
  //   });
  // });
});
