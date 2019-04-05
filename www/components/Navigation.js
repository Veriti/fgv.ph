import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { useContext } from "react";
import { AppContext } from "./App";

export default () => {
  const { menu, setMenu } = useContext(AppContext);

  return (
    <Nav navOpen={menu}>
      <Backdraft onClick={() => setMenu(!menu)} />
      <Main navOpen={menu}>
        <NavList>
          <li><a href="#">Home</a></li>
          <li>
            <a href="#">Services</a>
            <SubNavList>
              <li><a>Drainage System</a></li>
              <li><a>Fire Protection</a></li>
              <li><a>Stormwater Treatment</a></li>
              <li><a>Drainage Vents</a></li>
              <li><a>GRP Storage Tanks</a></li>
              <li><a>Fow Control System</a></li>
            </SubNavList>
          </li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </NavList>
      </Main>
    </Nav>
  );
};

const Nav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  padding-left: 70px;
  overflow: hidden;

  @media (min-width: 768px) {
    z-index: 9;
    padding-left: 0;
    display: ${p => p.navOpen ? `block`: `none`};
  }
`;
const Backdraft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: black;

  @media (min-width: 768px) {
    background: transparent;
  }
`
const Main_Open = css`
  transform: translateX(0);
`
const Main = styled.div`
  padding: 20px;
  color: white;
  position: relative;
  transform: translateX(50px);
  transition: transform 0.5s;
  box-sizing: border-box;
  backface-visibility: hidden;

  @media (min-width: 768px) {
    transform: translateX(0);
    top: 70px;
    width: 300px;
    right: 0;
    left: auto;
    position: absolute;
    background: #1a1a1a;
  }

  @media (min-width: 1200px) {
    right: auto;
    left: calc(50% + (600px - 300px));
  }

  ${p => p.navOpen ? Main_Open : null}
`
const NavList = styled.ul`
  padding: 0;
  list-style: none;

  @media (min-width: 768px) {
    margin: 0;
  }

  & > li {
    border-bottom: 1px solid #292929;

    & > a {
      font-weight: bold;
    }
  }

  & a {
    color: white;
    text-decoration: none;
    padding: 7px 0;
    display: block;
  }
`
const SubNavList = styled.ul`
  list-style: none;
  padding: 0 0 0 20px;
`
