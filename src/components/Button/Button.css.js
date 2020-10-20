import styled, {keyframes, css} from "styled-components";
import {device} from "../../utils";

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
  width: 100%;
  height: 70%;
  border: none;
  background-color: transparent;
  margin: auto;
  outline: none;
  cursor: pointer;

  @media ${device.webSmall}, ${device.mobileLandscape} {
    grid-column: 2/3;
    grid-row: 1/5;
  }

  ${({primary}) =>
    primary &&
    css`
      animation: ${hearts} 2.5s linear infinite;
    `}
  ${({secondary}) =>
    secondary &&
    css`
      background-color: ${({theme}) => theme.color.orange.normal};
      border-radius: 0.315em;
    `}
  ${({margin}) =>
    margin &&
    css`
      margin: 0 1.562em;
      width: auto;
    `}
  ${({row}) =>
    row &&
    css`
      @media ${device.webSmall}, ${device.mobileLandscape} {
        grid-row: 1/4;
        height: 60%;
        margin-left: 0;
      }
    `}
`;

export const ButtonLink = styled.a`
  padding: 0.5em 1em;
  border-radius: 0.315em;
  color: ${({theme}) => theme.color.blue.dark};
  background-color: ${({theme}) => theme.color.orange.normal};
  font-size: 0.875em;
  margin: 0;
  text-decoration: none;
`;
