import styled, {keyframes} from "styled-components";
import {CurrencyDollar} from "@styled-icons/heroicons-solid/CurrencyDollar";

const flip = keyframes`
0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
`;

export const Dollar = styled(CurrencyDollar)`
  height: 4em;
  color: white;
  animation: ${flip} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;
