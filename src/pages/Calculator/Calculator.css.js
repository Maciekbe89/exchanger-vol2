import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(4, 1fr) 2fr;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 75vh;
  background-color: ${({theme}) => theme.color.blue.dark};
`;
