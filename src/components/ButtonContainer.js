import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";
import Button from './Button'
import '../style/ButtonContainer.css'

export class ButtonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.props.setMarkdownText(event.target.value);
  }
  render() {
    return (
      <div className="ButtonContainer">
      <div className="ButtonContainer__container">
        <Button buttonName="Reset" buttonMethod = 'resetMarkdownText'/>
        <Button buttonName="Save Text" buttonMethod = 'saveText'/>
        <Button buttonName="Save Markdown"buttonMethod = 'saveMarkdownText' />
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.markdownReducer.text
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       setMarkdownText
//     },
//     dispatch
//   );

export default connect(mapStateToProps, actions)(ButtonContainer);
