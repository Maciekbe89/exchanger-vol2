import styled, {createGlobalStyle} from "styled-components";
import {normalize} from "styled-normalize";
import {CalculatorFill} from "@styled-icons/bootstrap/CalculatorFill";
import {ChartLine} from "@styled-icons/fa-solid/ChartLine";
import {Newspaper} from "@styled-icons/ionicons-sharp/Newspaper";

import Oswald from "./assets/font/Oswald-Regular.ttf";

export default createGlobalStyle`
${normalize} 

@font-face {
  font-family: 'Oswald';
  src: local('Oswald'),  
  url(${Oswald}) format(ttf);
}

* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 
}

body {
  font-family: "Oswald", sans-serif;
  background-color: ${({theme}) => theme.color.blue.dark}
}


`;

export const CalcIcon = styled(CalculatorFill)`
  height: 28px;
  /* color: white; */
`;
export const ChartIcon = styled(ChartLine)`
  height: 28px;
  /* color: white; */
`;
export const NewsIcon = styled(Newspaper)`
  height: 28px;
  /* color: white; */
`;
