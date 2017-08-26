import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { MarkdownDisplay } from "./../components/MarkdownDisplay";
import { shallow, mount, find } from "enzyme";
const initialState = { selectedProject: "test project" };

const mockStore = configureStore();

it("MarkdownDisplay renders without crashing", () => {
  let store = mockStore(initialState);

  shallow(<MarkdownDisplay />);
});
