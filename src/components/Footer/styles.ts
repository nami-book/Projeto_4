import styled from "styled-components"
import { colors } from "styles/GlobalStyles"

export const Footer = styled.footer`
  border: 0.5rem solid ${colors.blue};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  div {
    width: 50%;
    text-align: center, justify;
    width: 50%;
    display: flex;
    background-image:src="assets/img/Footrodape.png";
    border-radius: 4px;
    border:4px solid black;
  }
  p{
    font-family: verdana;
    font-size: 20px; 
  }
`

export const A = styled.a`
  margin: 0 auto;
`;