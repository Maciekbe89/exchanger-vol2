import styled, {keyframes} from "styled-components";

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
  z-index: 2;
  opacity: 0.25;
  animation: ${rotate} 4.5s linear infinite;
`;

export const DollarIcon = styled(Icons)`
  height: 4.375em;
  top: 4%;
`;
export const EuroIcon = styled(Icons)`
  height: 3.125em;
  top: 70%;
  animation-delay: 1s;
`;
export const PoundIcon = styled(Icons)`
  height: 2.5em;
  top: 30%;
  animation-delay: 1.5s;
`;
export const ShekelIcon = styled(Icons)`
  height: 1.563em;
  top: 52%;
  animation-name: ${rotateReverse};
`;
export const WonIcon = styled(Icons)`
  height: 2.813em;
  top: 15%;
  animation-delay: 3s;
`;
export const YenIcon = styled(Icons)`
  height: 3.125em;
  top: 60%;
  animation-name: ${rotateReverse};
  animation-delay: 3s;
`;
