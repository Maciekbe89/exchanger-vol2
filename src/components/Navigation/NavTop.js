import React from "react";
import {useChartsPath, useNewsPath} from "../../utils";
import {TitleCta, Logo, Title} from "./Navigation.css";
import TopLogo from "../../assets/logo.png";

const NavTop = () => {
  const isChartsPath = useChartsPath();
  const isNewsPath = useNewsPath();

  const changeTitle = () => {
    if (isChartsPath) {
      return "chart of currency";
    } else if (isNewsPath) {
      return "news";
    } else {
      return "currency calculator";
    }
  };

  return (
    <TitleCta>
      <Logo src={TopLogo} alt="logo" />
      <Title>{changeTitle()}</Title>
    </TitleCta>
  );
};

export default NavTop;
