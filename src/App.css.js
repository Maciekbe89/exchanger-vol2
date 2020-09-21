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

* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

body {
  font-family: "Oswald", sans-serif;

}

`;
