import styled from "styled-components";
import {device} from "../../utils";
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
  padding: 0.625em;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  &.active {
    color: white;
    opacity: 1;
  }
`;

export const TitleCta = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  height: 10vh;
  background-color: ${({theme}) => theme.color.blue.dark};
`;

export const Logo = styled.img`
  height: 70%;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 1em;
  margin: auto;
  color: #fff;
  letter-spacing: 1px;
  @media ${device.webSmall} {
    font-size: 1.5em;
  }
`;
