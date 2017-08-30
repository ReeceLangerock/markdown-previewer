import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { MarkdownEditor } from "./../components/MarkdownEditor";
import { shallow, mount, find } from "enzyme";
const initialState = { selectedProject: "test project" };

const mockStore = configureStore();

it("MarkdownEditor renders without crashing", () => {
  let store = mockStore(initialState);

  shallow(<MarkdownEditor />);
});
