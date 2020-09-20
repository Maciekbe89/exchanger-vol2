import React from "react";

const Input = ({onChange}) => {
  return (
    <input type="number" placeholder="amount" onChange={onChange} step="0.01" />
  );
};

export default Input;
