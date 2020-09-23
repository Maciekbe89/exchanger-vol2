import styled, {keyframes, css} from "styled-components";

const hearts = keyframes`
0% {
    transform: scale(1);
  }
  5% {
    transform: scale(1.1);
  }
  10% {
    transform: scale(1);
  }
  15% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
`;

export const Button = styled.button`
  font-size: 24px;
  border: none;
  background-color: white;

  ${({startBtn}) =>
    startBtn &&
    css`
      animation: ${hearts} 2.5s linear infinite;
    `}
`;
