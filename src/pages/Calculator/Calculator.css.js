import styled from "styled-components";
import {device} from "../../utils";
import {Check} from "@styled-icons/foundation/Check";

export const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(4, 1fr) 3fr;
  align-items: center;
  height: 75vh;
  margin: 0 1.565em;

  @media ${device.webSmall}, ${device.mobileLandscape} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Checkmark = styled(Check)`
  width: ${({smaller}) => (smaller ? "1.875em" : "2.5em")};
  color: ${({theme}) => theme.color.blue.dark};
  @media ${device.webSmall} {
    width: 4em;
  }
`;

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  height: 100%;
  min-width: 6.25em;
  @media ${device.webSmall}, ${device.mobileLandscape} {
    grid-column: 1/-1;
  }
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
  @media ${device.webSmall} {
    font-size: 5em;
  }
`;
