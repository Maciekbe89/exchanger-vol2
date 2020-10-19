import styled, {css} from "styled-components";
import {device} from "../../utils";

export const Container = styled.div`
  display: flex;
  height: 70%;
  justify-content: space-between;

  @media ${device.webSmall} {
    height: 38.5%;
    grid-column: 1/2;
    grid-row: ${({position}) => (position ? "3/5" : "2/4")};
    margin-right: 1.565em;
  }

  ${({margin}) =>
    margin &&
    css`
      margin: 0 1.565em;
    `}
`;

export const Label = styled.label`
  color: white;
  font-size: 0.875em;
  @media ${device.webSmall} {
    margin-right: 2em;
  }
`;
