import styled from "styled-components";

export const Container = styled.form`
  display: grid;
  grid-template-rows: repeat(3, 1fr) 5fr;
  height: 75vh;
  background-color: ${({theme}) => theme.color.blue.dark};
  align-items: center;
  margin: 0 25px;
`;
