import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { setSelectedProject } from "../../actions/actions";

export class MarkdownDisplay extends React.Component {
  render() {
    return (
      <section>
        
      </section>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {

    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownDisplay);
