import styled, {keyframes} from "styled-components";
import {device} from "../../utils";

const rotate = keyframes`
from {
    transform: rotateY(0);
    left: -15%;
}
to {
    transform: rotateY(360deg);
    left: 110%;
}
`;
const rotateReverse = keyframes`
from {
    transform: rotateY(0);
    left: 110%;
}
to {
    transform: rotateY(360deg);
    left: -5%;
}
`;
const appear = keyframes`
0% {
  opacity: 0;
    transform: scale(0);
}

75% {
  opacity: 1;
    transform: scale(1.3);
}
100% {
  opacity: 1;
    transform: scale(1);
}
`;

export const StartContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 80% 20%;
  height: 100vh;
  overflow: hidden;
  background-color: ${({theme}) => theme.color.blue.dark};
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const MainLogo = styled.img`
  width: 60%;
  z-index: 1;
  animation: ${appear} 1.5s ease-in-out;
  @media ${device.mobileLandscape} {
    width: 30%;
  }
  @media ${device.webSmall} {
    width: 20%;
  }
`;

export const BottomCta = styled(Main)`
  border-radius: 25% 25% 0 0;
  background-color: #fff;
  font-size: 1.75em;
  z-index: 2;
`;

export const Icons = styled.img`
  position: absolute;
  left: -16%;
  height: ${({height}) => height};
  top: ${({top}) => top};
  opacity: 0.25;
  animation: ${rotate} 4.5s linear infinite;
  animation-delay: ${({delay}) => delay};
  animation-name: ${({animationName}) =>
    animationName === "reverse" ? rotateReverse : ""};
  @media ${device.mobileLandscape} {
    animation-duration: 4s;
  }
  @media ${device.webSmall} {
    animation-duration: 6s;
  }
`;
