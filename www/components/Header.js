import { useState, useContext } from "react";
import styled from "@emotion/styled";
import { AppContext } from "./App";
import { Container } from "./Shared";
import Brand from "./ui/Brand";
import * as Icon from "./ui";

export default () => {
  const { theme, menu, setMenu } = useContext(AppContext);

  return (
    <Header>
      <HeaderContainer>
        <Logo>
          <Brand />
        </Logo>
        <Phone theme={theme} href="tel:023425144">
          <PhoneIcon />
          <PhoneText>(+02) 342-5144</PhoneText>
        </Phone>
        <MenuButton theme={theme} onClick={() => setMenu(!menu)}>
          <MenuIcon />
        </MenuButton>
      </HeaderContainer>
    </Header>
  );
};

const Logo = styled.div`
  margin-right: auto;
`;
const Header = styled.div`
  background: #1a1a1a;
  color: white;
  margin-top: 40px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  height: 70px;
  align-items: center;
`;
const MenuButton = styled.button`
  border: 0 none;
  padding: 0;
  appearance: none;
  background: transparent;
  display: flex;
  align-items: center;
  outline: none;
  cursor: pointer;
`;
const MenuIcon = styled(Icon.Menu)`
  font-size: 34px;
`
const Phone = styled.a`
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  justify-content: center;
  background: linear-gradient(0deg,#1d4603 0%,#1a1a1a 100%);
  height: 40px;
  color: white;
  text-decoration: none;

  &:hover {
    color: ${p => p.theme ? p.theme.colors.primary : `white`};

    & svg > path {
      fill: ${p => p.theme ? p.theme.colors.primary : `white`};
    }
  }

  @media (min-width: 768px) {
    position: relative;
    background: transparent;
    height: auto;
  }
`
const PhoneIcon = styled(Icon.Phone)`
  font-size: 28px;
`
const PhoneText = styled.span`
  font-size: 18px;
  margin: 0 32px 0 8px;
  font-weight: bold;
`
