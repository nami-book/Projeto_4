import styled from "styled-components"
import { colors } from "styles/GlobalStyles"

export const Nav = styled.nav`

    position: inline static;
    border: 0.3rem solid ${colors.black};
    background-color: ${colors.blue};
    color: white;
    text-align:center;
ul{
  display: flex;
  flex-direction:row;
  align-self: auto;
  text-align:center;
  color: white;

}
li {
      list-style-type: none;
      padding: 3rem;
      text-align: center;
      &:hover {
        background-color: ${colors.blackmenu};
        cursor: pointer;
      }

h2{
    font-weight: 600
    font-size 56px
    line-height 54px
    display flex
    align-items center
    text-align left
    letter-spacing 0.08em
    text-transform capitalize
};
input#menu-toggle {
    display: none;
  }
  @media (max-width: 400px) {
    ul {
      display: none;
    }
    ul li {
      text-align: left;
    }
   
    label[for="menu-toggle"] div.menu-hamburger {
      border: 0px solid ${colors.blackmenu};
      width: 0px;
      height: 0px;
      cursor: pointer;
    }
    label[for="menu-toggle"] div.menu-hamburger span.hamburger {
      position: relative;
      display: block;
      background-color: ${colors.blackmenu};
      width: 0px;
      height: 0px;
    }
    label[for="menu-toggle"] div.menu-hamburger span.hamburger:before,
    label[for="menu-toggle"] div.menu-hamburger span.hamburger:after {
      position: absolute;
      display: block;
      background-color: ${colors.whitesmoker};
      width: 100%;
      height: 100%;
      content: "By NicoleMB";
    }
    label[for="menu-toggle"] div.menu-hamburger span.hamburger:before {
      top: 0px;
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