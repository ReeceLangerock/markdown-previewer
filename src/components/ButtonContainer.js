import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/actions'
import Button from './Button'
import '../style/ButtonContainer.css'

export class ButtonContainer extends React.Component {
  constructor (props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput (event) {
    this.props.setMarkdownText(event.target.value)
  }
  render () {
    return (
      <div className='ButtonContainer'>
        <div className='ButtonContainer__container'>
          <Button buttonName='Reset' buttonMethod='resetMarkdownText' buttonStyle='danger' />
          <Button buttonName='Save Text' buttonMethod='saveText' buttonStyle='primary' />

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  text: state.markdownReducer.text
})

export default connect(mapStateToProps, actions)(ButtonContainer)
