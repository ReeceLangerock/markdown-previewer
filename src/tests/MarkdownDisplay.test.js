import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { MarkdownDisplay } from './../components/MarkdownDisplay'
import { shallow, mount, find, render, simulate } from 'enzyme'

const initialState = { text: '' }

const mockStore = configureStore()

describe('MarkdownDisplay', () => {
  let component
  beforeEach(() => {
    const props = {
      text: ''
    }
    component = mount(<MarkdownDisplay {...props} />)
  })

  it('has the correct class', () => {
    expect(component.hasClass('MarkdownDisplay')).toEqual(true)
  })

  it('has a div', () => {
    expect(component.find('div').length).toBe(1)
  })
})
