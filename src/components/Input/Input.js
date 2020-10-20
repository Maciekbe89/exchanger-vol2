import React from "react";
import {InputAmount} from "./Input.css";

const Input = ({onChange}) => {
  return (
    <InputAmount
      type="number"
      inputmode="numeric"
      placeholder="amount"
      onChange={onChange}
      step="0.01"
      pattern="[0-9]*"
    />
  );
};

export default Input;
