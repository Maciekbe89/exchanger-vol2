import React from "react";
import {NavWrapper, Link} from "./Navigation.css";
import PropTypes from "prop-types";

const Navigation = ({items = []}) => {
  return (
    <NavWrapper>
      {items.map((item) => (
        <Link exact key={item.to} to={item.to}>
          {item.content}
        </Link>
      ))}
    </NavWrapper>
  );
};

Navigation.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Navigation;
