import {createGlobalStyle} from "styled-components"


export default createGlobalStyle`
 @font-face {

    font-family :'Port Lligat Sans';
    text-align:center,justify;
    font-size: 80px;
    margin-block-start: 30px;
    margin-block-end: 40px;
    src:url('asserts/PortLligatSans.ttf') format(ttf);
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
   
  }
  body {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }
` 

export const colors = {
  blue: "#290b89",
  bgreen: "#8973d4",
  bg: "#3ca4b6ef, #21a8ade7, #21a8ade7, #21a8ade7 #21a8ade7 ",
  shadow: "rgba(0, 0, 0, 0.25)",
  white: "#ffffff",
  whitesmoker:"#f5f5f5",
  black: "#000000",
  blackmenu:"#030303",
  gray: "#cccccc",
  solid:"79, 23, 232, 0.741"
}