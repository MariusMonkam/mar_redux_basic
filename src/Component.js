import "./styles.css";
import React from "react";

export const Component = ({
  counter,
  handleIncrementClick,
  handleDecrementClick
}) => (
  <div>
    <h1>Helloworld React & Redux! {counter}</h1>
    <button onClick={handleDecrementClick}>Decrement</button>
    <button onClick={handleIncrementClick}>Increment</button>
  </div>
);
