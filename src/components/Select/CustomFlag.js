import React from "react";
import {components} from "react-select";

const {SingleValue} = components;
const CustomFlag = (props) => (
  <SingleValue {...props}>
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
  </SingleValue>
);

export default CustomFlag;
