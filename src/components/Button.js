import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";
import "../style/Button.css";

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(this.props.buttonMethod);
    this.props[this.props.buttonMethod]();
  }
  render() {
    return (
      <button className="Button" onClick={this.handleClick}>
        {this.props.buttonName}
      </button>
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

export default connect(mapStateToProps, actions)(Button);
