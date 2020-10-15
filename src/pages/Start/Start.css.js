import styled, {keyframes, css} from "styled-components";

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

export const BottomCta = styled(Main)`
  border-radius: 25% 25% 0 0;
  background-color: #fff;
  font-size: 1.75em;
`;

export const Icons = styled.img`
  position: absolute;
  left: -16%;
  height: ${({height}) => height};
  top: ${({top}) => top};
  z-index: 2;
  opacity: 0.25;
  animation: ${rotate} 4.5s linear infinite;
  animation-delay: ${({delay}) => delay};
  animation-name: ${({animationName}) =>
    animationName === "reverse" ? rotateReverse : ""};
`;
