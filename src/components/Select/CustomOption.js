import React from "react";
import {components} from "react-select";

const {Option} = components;
const CustomOption = (props) => (
  <Option {...props}>
    <img
      src={props.data.icon}
      alt="flag"
      style={{
        width: "1.565em",
        height: "1em",
        borderRadius: "30%",
        marginRight: "1em",
        fontSize: "0.75em",
      }}
    />
    <span>{props.data.label}</span>
  </Option>
);

export default CustomOption;
