import React from "react";
import logo from "../../assets/logo.png";
import {StartContainer, Main, BottomCta, Icons, MainLogo} from "./Start.css";
import {Button} from "../../components";
import {CurrenciesIcons} from "../../utils";
import PropTypes from "prop-types";

const Start = ({getStart}) => {
  return (
    <StartContainer>
      <Main>
        <MainLogo src={logo} alt="logo" />
        {CurrenciesIcons.map(
          ({image, name, height, top, delay, animationName}) => (
            <Icons
              key={name}
              delay={delay}
              height={height}
              top={top}
              src={image}
              alt={name}
              animationName={animationName}
            />
          )
        )}
      </Main>
      <BottomCta>
        <Button type="button" primary onClick={getStart}>
          Get Start
        </Button>
      </BottomCta>
    </StartContainer>
  );
};

Start.propTypes = {
  getStart: PropTypes.func,
};

export default Start;
