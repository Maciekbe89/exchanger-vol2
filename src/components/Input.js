import React from "react";

const Input = ({onChange}) => {
  return <input type="number" placeholder="amount" onChange={onChange} />;
};

export default Input;
