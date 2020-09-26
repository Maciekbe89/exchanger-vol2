import React from "react";
import {InputAmount} from "./Input.css";

const Input = ({onChange}) => {
  return (
    <InputAmount
      type="number"
      placeholder="amount"
      onChange={onChange}
      step="0.01"
    />
  );
};

export default Input;
