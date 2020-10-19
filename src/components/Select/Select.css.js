import styled, {css} from "styled-components";
import {device} from "../../utils";

export const Container = styled.div`
  display: flex;
  height: 70%;
  justify-content: space-between;

  @media ${device.webSmall} {
    height: ${({height}) => height};
    grid-column: 1/2;
    grid-row: ${({position}) => position};
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
