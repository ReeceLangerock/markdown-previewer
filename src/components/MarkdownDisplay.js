import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../style/MarkdownDisplay.css'

var Remarkable = require('remarkable')
var md = new Remarkable()
export class MarkdownDisplay extends React.Component {
  render () {
    return (

      <div className='MarkdownDisplay' dangerouslySetInnerHTML={{ __html: md.render(this.props.text) }} />

    )
  }
}

const mapStateToProps = state => ({
  text: state.markdownReducer.text
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownDisplay)
