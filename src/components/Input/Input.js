import React from "react";
import {InputAmount} from "./Input.css";
import PropTypes from "prop-types";

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

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Input;
