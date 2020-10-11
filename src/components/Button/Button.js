import React from "react";
import {ButtonCta, ButtonLink} from "./Button.css";

const Button = ({link, type, children, onClick, ...props}) => {
  return (
    <>
      {link ? (
        <ButtonLink href={link} target="_blank" rel="noopener noreferrer">
          {children}
        </ButtonLink>
      ) : (
        <ButtonCta {...props} onClick={onClick} type={type}>
          {children}
        </ButtonCta>
      )}
    </>
  );
};

export default Button;
