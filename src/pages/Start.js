import React from "react";
import logo from "../assets/logo.png";
import {StartContainer, Main, BottomCta, Icon} from "./Start.css";
import Dollar from "../assets/svg/dollar.svg";

const Start = () => {
  return (
    <StartContainer>
      <Main>
        <img src={logo} alt="logo" />
        <Icon src={Dollar} />
      </Main>
      <BottomCta>
        <p>Get Start</p>
      </BottomCta>
    </StartContainer>
  );
};

export default Start;
