import React from "react";
import {components} from "react-select";

const {SingleValue} = components;
const CustomFlag = (props) => (
  <SingleValue {...props}>
    <img
      src={props.data.icon}
      alt="flag"
      style={{
        width: "1.563em",
        height: "1em",
        borderRadius: "30%",
        marginRight: "1em",
      }}
    />
    <span>{props.data.label}</span>
  </SingleValue>
);

export default CustomFlag;
