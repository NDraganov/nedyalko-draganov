import Head from "next/head";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          as="image"
          href="/images/logo.svg"
          type="image/x-icon"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
