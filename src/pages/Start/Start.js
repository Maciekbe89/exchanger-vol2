import React from "react";
import logo from "../../assets/logo.png";
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
import {Button} from "../../components/Button/Button.css";
import Dollar from "../../assets/svg/dollar.svg";
import Euro from "../../assets/svg/euro.svg";
import Pound from "../../assets/svg/pound.svg";
import Shekel from "../../assets/svg/shekel.svg";
import Won from "../../assets/svg/won.svg";
import Yen from "../../assets/svg/yen.svg";

const Start = ({getStart}) => {
  return (
    <StartContainer>
      <Main>
        <img src={logo} alt="logo" />
        <DollarIcon src={Dollar} alt="dollar sign" />
        <EuroIcon src={Euro} alt="euro sign" />
        <PoundIcon src={Pound} alt="pound sign" />
        <ShekelIcon src={Shekel} alt="shekel sign" />
        <WonIcon src={Won} alt="won sign" />
        <YenIcon src={Yen} alt="yen sign" />
      </Main>
      <BottomCta>
        <Button startBtn onClick={getStart}>
          Get Start
        </Button>
      </BottomCta>
    </StartContainer>
  );
};

export default Start;
