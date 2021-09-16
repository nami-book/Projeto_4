import styled from "styled-components"
import { colors } from "styles/GlobalStyles"

export const Header = styled.header`
    display: flex;
    border: 1.5em solid ${colors.black};
    background-color: ${colors.black};
    align-items: center;
    picture {
    img {
      height: 100px;
      border: 0;
      margin-block-start: 0px;
      margin-block-end: 0px;
      margin-bottom: 0px;
    }
  }
  h1 {
    width: 100%;
    text-align: center,justify;
    color:whitesmoke;
    font-size: 80px;
    margin-block-start: 30px;
    margin-block-end: 40px;
  }
`

  
    