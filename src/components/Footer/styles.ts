import styled from "styled-components"
import { colors } from "styles/GlobalStyles"

export const Footer = styled.footer`
  border: 0.3rem solid ${colors.black};
  background: ${colors.blue};
  flex-direction: row;
  align-items: right;

  div {
    color:${colors.whitesmoker};
    width: 100%;
    text-align: center, justify;
    display:-ms-flexbox;
    background:${colors.blue};
  
  }
  p{

    font-family: verdana;
    font-size: 18px; 
  }
  
`