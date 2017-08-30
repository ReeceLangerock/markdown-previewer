import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";

import Footer from "./components/Footer";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownDisplay from "./components/MarkdownDisplay";
import ButtonContainer from "./components/ButtonContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <div className="App__container">
            <h1>Mark My Words...</h1>
            <div className="App__markdown-container">
              <MarkdownEditor />
              <MarkdownDisplay />
            </div>

            <ButtonContainer />
            <Footer />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
