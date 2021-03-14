import { connect } from "react-redux";
import { Component } from "./Component";

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrementClick: () => dispatch({ type: "INCREMENT" }),
    handleDecrementClick: () => dispatch({ type: "DECREMENT" })
  };
};

export const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
