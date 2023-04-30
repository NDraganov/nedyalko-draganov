import { Fragment } from "react";
import Head from "next/head";
import Button from "../components/button/button";

import classes from "./404.module.css";

const Custom404 = () => {
  return (
    <Fragment>
      <Head>
        <title>Page 404</title>
        <meta
          name="description"
          content="Page 404 - Please double check the URL!"
        />
      </Head>
      <div className={classes.page404}>
        <h1>404</h1>
        <h3>
          This page does <span>not</span> exist!
        </h3>
        <p>
          Please double check the <span>URL</span> or return to{" "}
        </p>
        <Button href="/" title="Home page" text="Home page" />
      </div>
    </Fragment>
  );
};

export default Custom404;
