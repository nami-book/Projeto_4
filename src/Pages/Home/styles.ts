import styled from "styled-components"

export const Main = styled.main`
  background-color: white
  display grid;
  grid-template-columns: auto auto auto;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
  }
  @media (max-width: 425px) {
    display: grid;
    grid-template-columns: auto;
  }
`