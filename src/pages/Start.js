import React from "react";
import logo from "../assets/logo.png";
import {
  StartContainer,
  Main,
  BottomCta,
  DollarIcon,
  EuroIcon,
  PoundIcon,
  ShekelIcon,
  WonIcon,
  YenIcon,
} from "./Start.css";
import Dollar from "../assets/svg/dollar.svg";
import Euro from "../assets/svg/euro.svg";
import Pound from "../assets/svg/pound.svg";
import Shekel from "../assets/svg/shekel.svg";
import Won from "../assets/svg/won.svg";
import Yen from "../assets/svg/yen.svg";

const Start = () => {
  return (
    <StartContainer>
      <Main>
        <img src={logo} alt="logo" />
        <DollarIcon src={Dollar} />
        <EuroIcon src={Euro} />
        <PoundIcon src={Pound} />
        <ShekelIcon src={Shekel} />
        <WonIcon src={Won} />
        <YenIcon src={Yen} />
      </Main>
      <BottomCta>
        <p>Get Start</p>
      </BottomCta>
    </StartContainer>
  );
};

export default Start;
