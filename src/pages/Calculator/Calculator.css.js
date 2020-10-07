import styled from "styled-components";
import {Check} from "@styled-icons/foundation/Check";

export const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(4, 1fr) 3fr;
  grid-template-columns: 100%;
  align-items: center;
  max-width: 100%;
  height: 75vh;
  background-color: ${({theme}) => theme.color.blue.dark};
  margin: 0 25px;

  /* overflow: hidden; */
`;

export const Checkmark = styled(Check)`
  width: 40px;
  color: ${({theme}) => theme.color.blue.dark};
`;

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  color: white;
  height: 100%;
  min-width: 100px;

  /* padding: 5px 15px; */
  /* max-width: 100%; */
  /* overflow: hidden; */
  /* overflow: hidden; */
`;

export const AmountResult = styled.p`
  flex-basis: 40%;
  display: flex;
  align-items: center;
  /* border-bottom: 1px solid white; */
`;
export const TotalResult = styled.p`
  flex-basis: 60%;
  /* min-width: 100px; */
  /* height: auto; */
  width: 100%;
  /* height: auto; */
  /* display: flex;
  align-items: center; */
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
  overflow: hidden;
  word-wrap: break-word;
  text-align: center;
  /* line-height: 300%; */
  /* margin-top: auto; */
  font-size: ${(props) => props.fontSize}px;
`;
