import styled, {createGlobalStyle} from "styled-components";
import {normalize} from "styled-normalize";
import {CalculatorFill} from "@styled-icons/bootstrap/CalculatorFill";
import {ChartLine} from "@styled-icons/fa-solid/ChartLine";
import {Newspaper} from "@styled-icons/ionicons-sharp/Newspaper";
import {device} from "./utils";
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
  background-color: ${({theme}) => theme.color.blue.dark};

 @media ${device.mobileMedium} {
   font-size: 18px;
 }
 @media ${device.mobileLarge} {
   font-size: 20px;
 }
 @media ${device.tabletMedium} {
   font-size: 28px;
 }
 @media ${device.tabletLarge} {
   font-size: 38px;
 }

}


`;

export const CalcIcon = styled(CalculatorFill)`
  height: 1.75em;
  @media ${device.webSmall} {
    height: 2.5em;
  }
`;
export const ChartIcon = styled(ChartLine)`
  height: 1.75em;
  @media ${device.webSmall} {
    height: 2.5em;
  }
`;
export const NewsIcon = styled(Newspaper)`
  height: 1.75em;
  @media ${device.webSmall} {
    height: 2.5em;
  }
`;
