import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Global } from "@emotion/core";
import globalStyles from "../lib/globalStyles";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <body>
          <Global styles={globalStyles} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
