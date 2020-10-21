import React from "react";
import {ButtonCta, ButtonLink} from "./Button.css";
import PropTypes from "prop-types";

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

Button.propTypes = {
  link: PropTypes.string,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
