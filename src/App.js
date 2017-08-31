import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store/store'

import Footer from './components/Footer'
import MarkdownEditor from './components/MarkdownEditor'
import MarkdownDisplay from './components/MarkdownDisplay'
import ButtonContainer from './components/ButtonContainer'
import './App.css'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <div className='App'>
            <h1 className='title' >Mark My Words...</h1>
            <div className='App__markdown-container'>
              <MarkdownEditor />
              <MarkdownDisplay />
            </div>

            <ButtonContainer />
          </div>

          <Footer />

        </div>
      </Provider>
    )
  }
}

export default App
