import {createGlobalStyle} from "styled-components";
import {normalize} from "styled-normalize";
import Oswald from "./assets/font/Oswald-Regular.ttf";

export default createGlobalStyle`
${normalize} 

@font-face {
  font-family: 'Oswald';
  src: local('Oswald'),  
  url(${Oswald}) format(ttf);
}

body {
  font-family: "Oswald", sans-serif;
}


`;
