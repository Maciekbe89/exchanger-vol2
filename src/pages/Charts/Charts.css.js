import styled from "styled-components";
import {device} from "../../utils";

export const Container = styled.form`
  display: grid;
  grid-template-rows: repeat(3, 1fr) 5fr;
  height: 75vh;
  background-color: ${({theme}) => theme.color.blue.dark};
  align-items: center;
  overflow: hidden;

  @media ${device.webSmall} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ChartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media ${device.webSmall} {
    grid-column: 1/-1;
    grid-row: 4/-1;
  }

  .apexcharts-text {
    font-size: 0.8em;
  }
  .apexcharts-xaxistooltip-bottom {
    display: none;
  }
  .apexcharts-tooltip {
    font-size: 1em;
  }
`;
