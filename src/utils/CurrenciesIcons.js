import Dollar from "../assets/svg/dollar.svg";
import Euro from "../assets/svg/euro.svg";
import Pound from "../assets/svg/pound.svg";
import Shekel from "../assets/svg/shekel.svg";
import Won from "../assets/svg/won.svg";
import Yen from "../assets/svg/yen.svg";

export const CurrenciesIcons = [
  {
    name: "dollar sign",
    image: `${Dollar}`,
    height: "4.375em",
    top: "4%",
  },
  {
    name: "euro sign",
    image: `${Euro}`,
    height: "3.125em",
    top: "70%",
    delay: "1s",
  },
  {
    name: "pound sign",
    image: `${Pound}`,
    height: "2.5em",
    top: "30%",
    delay: "1.5s",
  },
  {
    name: "shekel sign",
    image: `${Shekel}`,
    height: "1.563em",
    top: "52%",
    animationName: "reverse",
  },
  {
    name: "won sign",
    image: `${Won}`,
    height: "2.813em",
    top: "15%",
    delay: "3s",
  },
  {
    name: "yen sign",
    image: `${Yen}`,
    height: "3.125em",
    top: "60%",
    animationName: "reverse",
    delay: "3s",
  },
];
