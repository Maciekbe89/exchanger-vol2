import styled from "styled-components";
import {Check} from "@styled-icons/foundation/Check";

export const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(4, 1fr) 3fr;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 75vh;
  background-color: ${({theme}) => theme.color.blue.dark};
`;
export const Checkmark = styled(Check)`
  width: 40px;
  /* height: 50px; */
  color: ${({theme}) => theme.color.blue.dark};
`;
