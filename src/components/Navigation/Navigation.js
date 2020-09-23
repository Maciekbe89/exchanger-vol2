import React from "react";
import {NavWrapper, Link} from "./Navigation.css";

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

export default Navigation;
