import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import { setCount } from "../actions";
import { connect } from "react-redux";

class MyButton extends Component {
  handleOnClick = () => {
    this.props.handleOnClick();
  };
  render() {    
    return (
      <>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleOnClick}
        >
          Click
        </Button>
        <div>{this.props.count}</div>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {  
  return {
    handleOnClick: () => dispatch(setCount())
  };
};

const mapStateToProps = (state, ownProps) => {  
  return {
    count: state.count
  };
};

export const ButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyButton);

export default ButtonContainer;
