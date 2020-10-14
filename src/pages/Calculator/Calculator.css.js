import styled from "styled-components";
import {Check} from "@styled-icons/foundation/Check";

export const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(4, 1fr) 3fr;
  align-items: center;
  max-width: 100%;
  height: 75vh;
  background-color: ${({theme}) => theme.color.blue.dark};
  margin: 0 1.565em;
`;

export const Checkmark = styled(Check)`
  width: ${({smaller}) => (smaller ? "1.875em" : "2.5em")};
  color: ${({theme}) => theme.color.blue.dark};
`;

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  height: 100%;
  min-width: 6.25em;
`;

export const AmountResult = styled.p`
  flex-basis: 40%;
  display: flex;
  align-items: center;
`;
export const TotalResult = styled.p`
  flex-basis: 60%;
  width: 100%;
  overflow: hidden;
  word-wrap: break-word;
  text-align: center;
  font-size: 3.125em;
`;
