import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";

import Footer from "./components/Footer";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownDisplay from "./components/MarkdownDisplay";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
        <MarkdownEditor />
        <MarkdownDisplay />
        <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
