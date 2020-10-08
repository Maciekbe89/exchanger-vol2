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

export const ButtonCta = styled.button`
  font-size: 24px;
  width: 100%;
  height: 70%;
  border: none;
  background-color: transparent;
  margin: auto;

  ${({primary}) =>
    primary &&
    css`
      animation: ${hearts} 2.5s linear infinite;
    `}
  ${({secondary}) =>
    secondary &&
    css`
      background-color: ${({theme}) => theme.color.orange.normal};
      border-radius: 5px;
    `}
  ${({margin}) =>
    margin &&
    css`
      margin: 0 25px;
      width: auto;
    `}
`;
