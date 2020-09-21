import styled, {keyframes} from "styled-components";

const rotate = keyframes`
from {
    transform: rotateY(0);
    left: -10%;
}
to {
    transform: rotateY(360deg);
    left: 110%;
}
`;

export const StartContainer = styled.div`
  display: grid;
  grid-template-rows: 80% 20%;
  height: 100vh;
  background-color: ${({theme}) => theme.color.blue.dark};
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

export const Icon = styled.img`
  height: 80px;
  position: absolute;
  top: 40px;
  left: 40px;
  z-index: 2;
  opacity: 0.4;
  animation: ${rotate} 4s linear infinite;
`;
