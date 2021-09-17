import styled from "styled-components"
import { colors } from "styles/GlobalStyles"

export const Section = styled.section`

  background-color: ${colors.bgreen};
  box-shadow: ${colors.shadow};
  margin: 0.8px;
  border: 0.2rem solid ${colors.black};

  >h3>p{
    font-family: 'Post No Bills Jaffna SemiBold';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    display: flex;
    align-items: center;
    text-align: left;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    font-feature-settings: 'kern' off;
    color:${colors.white};
    border: 1px solid ${colors.bg};
    text-shadow:${colors.whitesmoker}
}
`