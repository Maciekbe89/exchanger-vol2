import React from "react";
import {components} from "react-select";

const {Option} = components;
const CustomOption = (props) => (
  <Option {...props}>
    <img
      src={props.data.icon}
      alt="flag"
      style={{
        width: "25px",
        height: "15px",
        borderRadius: "30%",
        margin: "0 15px",
      }}
    />
    <span>{props.data.label}</span>
  </Option>
);

export default CustomOption;
