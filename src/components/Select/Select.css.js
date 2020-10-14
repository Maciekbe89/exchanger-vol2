import styled, {css} from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 70%;
  justify-content: space-between;

  ${({margin}) =>
    margin &&
    css`
      margin: 0 1.565em;
    `}
`;

export const Label = styled.label`
  color: white;
  font-size: 0.875em;
`;
