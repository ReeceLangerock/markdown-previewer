import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/actions'
import '../style/MarkdownEditor.css'

export class MarkdownEditor extends React.Component {
  constructor (props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput (event) {
    this.props.setMarkdownText(event.target.value)
  }
  render () {
    return <textarea className='MarkdownEditor' value={this.props.text} onChange={this.handleInput} />
  }
}

const mapStateToProps = state => ({
  text: state.markdownReducer.text
})

export default connect(mapStateToProps, actions)(MarkdownEditor)
