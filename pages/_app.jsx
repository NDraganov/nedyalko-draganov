import Head from "next/head";
import Layout from "@/components/layout/layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          href="/images/logo.svg"
          as="image"
          type="image/x-icon"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
