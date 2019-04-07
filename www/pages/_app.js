import React from "react";
import App, { Container } from "next/app";

export default class extends App {
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
        <Component {...apiData} {...pageProps} />
      </Container>
    );
  }
}
