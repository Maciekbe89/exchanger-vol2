import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 15vh;
  background-color: ${({theme}) => theme.color.blue.dark};
`;

export const Link = styled(NavLink)`
  color: white;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;
