import styled from "styled-components"
import { colors } from "styles/GlobalStyles"

export const Nav = styled.nav`

    position: inline static;
    border:0em 1em solid ${colors.bg};
    background-color: ${colors.bg};
    color: white;
    text-align:center;
ul{
  display: flex;
  flex-direction: row;
}
li {
      list-style-type: none;
      padding: 2rem;
      text-align: center;
      &:hover {
        background-color: ${colors.green};
        cursor: pointer;
      }

h2{
    font-weight: 600
    font-size 36px
    line-height 54px
    display flex
    align-items center
    text-align left
    letter-spacing 0.05em
    text-transform capitalize
};
input#menu-toggle {
    display: none;
  }
  @media (max-width: 425px) {
    ul {
      display: none;
    }
    ul li {
      text-align: left;
    }
    label[for="menu-toggle"] {
      display: flex;
      flex: 1;
      justify-content: flex-end;
    }
    label[for="menu-toggle"] div.menu-hamburger {
      border: 1px solid ${colors.white};
      width: 35px;
      height: 15px;
      margin: 15px 2px 5px 5px;
      cursor: pointer;
    }
    label[for="menu-toggle"] div.menu-hamburger span.hamburger {
      position: relative;
      display: block;
      background-color: ${colors.black};
      width: 30px;
      height: 2px;
    }
    label[for="menu-toggle"] div.menu-hamburger span.hamburger:before,
    label[for="menu-toggle"] div.menu-hamburger span.hamburger:after {
      position: absolute;
      display: block;
      background-color: ${colors.black};
      width: 100%;
      height: 100%;
      content: "";
    }
    label[for="menu-toggle"] div.menu-hamburger span.hamburger:before {
      top: -10px;
    }
    label[for="menu-toggle"] div.menu-hamburger span.hamburger:after {
      bottom: -10px;
    }
    input:checked ~ ul {
      display: block;
      animation: fade-in 1s;
    }
    input:checked
      ~ label[for="menu-toggle"]
      div.menu-hamburger
      span.hamburger {
      transform: rotate(45deg);
      transition: 0.5s;
    }
    input:checked
      ~ label[for="menu-toggle"]
      div.menu-hamburger
      span.hamburger:before,
      input:checked
      ~ label[for="menu-toggle"]
      div.menu-hamburger
      span.hamburger:after {
      transform: rotate(90deg);
      transition: 0.5s;
    }
    input:checked
      ~ label[for="menu-toggle"]
      div.menu-hamburger
      span.hamburger:before {
      top: 0px;
    }
    input:checked
      ~ label[for="menu-toggle"]
      div.menu-hamburger
      span.hamburger:after {
      bottom: 0px;
    }
    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes fade-out {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
}
`