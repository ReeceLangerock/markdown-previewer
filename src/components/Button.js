import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/actions'
import '../style/Button.css'

export class Button extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    console.log(this.props.buttonMethod)
    this.props[this.props.buttonMethod](this.props.text)
  }
  render () {
    return (
      <button className={`Button Button__${this.props.buttonStyle}`} onClick={this.handleClick}>
        {this.props.buttonName}
      </button>
    )
  }
}

const mapStateToProps = state => ({
  text: state.markdownReducer.text
})

export default connect(mapStateToProps, actions)(Button)
