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
  opacity: 0.4;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  &.active {
    color: white;
    /* border-bottom: solid 0.5px white; */
    opacity: 1;
    /* font-size: 20px; */
    /* border-radius: 50%; */
  }
`;
