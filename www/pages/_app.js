import React, { useContext } from "react";
import NextApp, { Container } from "next/app";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import App, { AppContext } from "../components/App";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Prefooter from "../components/Prefooter";
import Footer from "../components/Footer";
import fetch from "isomorphic-unfetch";

export default class extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    const { req } = ctx;
    const dev = process.env.NODE_ENV === "development";

    let apiData = {};
    let protocol = `http:`;
    let host = `localhost:3000`;

    if (req) {
      protocol = req.headers["x-forwarded-proto"] 
        ? `${req.headers['x-forwarded-proto']}:`
        : `http:`;
      host = req.headers["x-now-deployment-url"] 
        ? req.headers["x-now-deployment-url"] 
        : `localhost:3000`;
    }

    const apiURL = `${protocol}//${host}/api`;

    const responseProducts = await fetch(`${apiURL}/products`);
    apiData.products = await responseProducts.json();

    const responseFields = await fetch(`${apiURL}/fields`);
    apiData.fields = await responseFields.json();

    const responseIndustries = await fetch(`${apiURL}/industries`);
    apiData.industries = await responseIndustries.json();

    if (Component.getInitialProps) {
      const pageProps = await Component.getInitialProps(ctx);
      return { apiData, pageProps };
    }

    return { apiData };
  }

  render() {
    const { Component, apiData, pageProps } = this.props;

    return (
      <Container>
        <App>
          <Navigation />
          <MainWrap hasMenu={true}>
            <Header />
            <Component {...apiData} {...pageProps} />
            <Prefooter {...apiData} {...pageProps} />
            <Footer />
          </MainWrap>
        </App>
      </Container>
    );
  }
}

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
