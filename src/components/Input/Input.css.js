import styled from "styled-components";
import {device} from "../../utils";

export const InputAmount = styled.input`
  height: 70%;
  border-radius: 0.25em;
  border: none;
  padding-left: 0.625em;
  outline: none;

  @media ${device.webSmall}, ${device.mobileLandscape} {
    height: 38.5%;
    grid-row: 1/3;
    grid-column: 1/2;
    margin-right: 1.565em;
  }

  &::placeholder {
    font-size: 1em;
    letter-spacing: 1px;
  }
`;
