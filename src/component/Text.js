import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";
import { connect } from "react-redux";
import { setText } from "../actions";

class Text extends Component {
  handleChange = event => {
    this.props.handleChange(event.target.value);
  };
  render() {
    return (
      <TextField
        label="Demo"
        value={this.props.value}
        onChange={this.handleChange}
        margin="normal"
      />
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {  
  return {
    handleChange: value => dispatch(setText(value))
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.value
  };
};

export const TextContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Text);

export default TextContainer;
