import styled from "styled-components";

export const Container = styled.form`
  display: grid;
  grid-template-rows: repeat(3, 1fr) 5fr;
  height: 75vh;
  background-color: ${({theme}) => theme.color.blue.dark};
  align-items: center;
  overflow: hidden;
`;

export const ChartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

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
