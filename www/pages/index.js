import React, { useContext } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import fetch from "isomorphic-unfetch";
import Head from "../components/Head";
import App, { AppContext } from "../components/App";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import FieldsList from "../components/FieldsList";
import Commitment from "../components/Commitment";
import Prefooter from "../components/Prefooter";
import Footer from "../components/Footer";

const Index = props => {
  return (
    <App>
      <Navigation />
      <MainWrap hasMenu={true}>
        <Head title="FGV" />
        <Header />
        <Hero />
        <FieldsList {...props} />
        <Commitment />
        <Prefooter {...props} />
        <Footer />
      </MainWrap>
    </App>
  );
};

export default Index;

const MainWrap = ({ children }) => {
  const { menu } = useContext(AppContext);
  return <Main hasMenu={menu}>{children}</Main>;
};

const MainWrap_Docked = css`
  transform: translateX(calc(-100% + 70px));

  @media (min-width: 768px) {
    transform: translateX(0);
  }
`;
const Main = styled.div`
  transition: transform 0.4s;
  overflow: auto;
  position: relative;

  ${p => (p.hasMenu ? MainWrap_Docked : null)};
`;
