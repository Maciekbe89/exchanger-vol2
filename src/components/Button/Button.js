import React from "react";
import {ButtonCta} from "./Button.css";

const Button = ({type, children, onClick}) => {
  return (
    <ButtonCta onClick={onClick} type={type}>
      {children}
    </ButtonCta>
  );
};

export default Button;
