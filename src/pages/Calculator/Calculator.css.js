import styled from "styled-components";
import {Check} from "@styled-icons/foundation/Check";

export const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(4, 1fr) 3fr;
  align-items: center;
  /* max-width: 100vw; */
  height: 75vh;
  background-color: ${({theme}) => theme.color.blue.dark};
  margin: 0 25px;
  overflow: hidden;
`;

export const Checkmark = styled(Check)`
  width: 40px;
  color: ${({theme}) => theme.color.blue.dark};
`;

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100%;
  max-width: 100vw;
  overflow: hidden;
`;

export const AmountResult = styled.p`
  flex: 1;
  display: flex;
  align-items: center;
  border-bottom: 1px solid white;
`;
export const TotalResult = styled.p`
  flex: 4;
  display: flex;
  align-items: center;
  font-size: ${(props) => props.fontSize}px;
  border-bottom: 1px solid white;

  white-space: nowrap;
  text-overflow: ellipsis;
`;
