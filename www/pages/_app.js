import React from "react";
import App, { Container } from "next/app";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    let apiData = {};

    const apiURL = process.env.API_URL
      ? process.env.API_URL
      : `http://localhost:3000/api`;

    const responseProducts = await fetch(`${apiURL}/products`);
    apiData.products = await responseProducts.json();

    const responseFields = await fetch(`${apiURL}/fields`);
    apiData.fields = await responseFields.json();

    const responseIndustries = await fetch(`${apiURL}/industries`);
    apiData.industries = await responseIndustries.json();

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
      return { apiData, pageProps }
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

export default MyApp;
