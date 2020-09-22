import styled, {keyframes} from "styled-components";

const rotate = keyframes`
from {
    transform: rotateY(0);
    left: -5%;
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
  display: grid;
  grid-template-rows: 80% 20%;
  height: 100vh;
  background-color: ${({theme}) => theme.color.blue.dark};
  /* overflow-y: hidden; */
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BottomCta = styled(Main)`
  border-radius: 25% 25% 0 0;
  background-color: #fff;
  font-size: 24px;
  margin: 0;
`;

export const Icons = styled.img`
  position: absolute;
  left: -17%;
  z-index: 2;
  opacity: 0.4;
  animation: ${rotate} 4.5s linear infinite;
`;

export const DollarIcon = styled(Icons)`
  height: 80px;
  top: 5%;
`;
export const EuroIcon = styled(Icons)`
  height: 50px;
  top: 70%;
  animation-delay: 1s;
`;
export const PoundIcon = styled(Icons)`
  height: 40px;
  top: 30%;
  animation-delay: 1.5s;
`;
export const ShekelIcon = styled(Icons)`
  height: 25px;
  top: 52%;
  animation-name: ${rotateReverse};
`;
export const WonIcon = styled(Icons)`
  height: 45px;
  top: 15%;
  /* left: -20%; */
  animation-delay: 3s;
`;
export const YenIcon = styled(Icons)`
  height: 50px;
  top: 60%;
  animation-name: ${rotateReverse};
  animation-delay: 3s;
`;
