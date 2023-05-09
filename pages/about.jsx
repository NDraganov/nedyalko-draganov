import { Fragment } from "react";
import Head from "next/head";
import AboutText from "../components/about-page/about-text";
import Toolkit from "../components/about-page/toolkit";

import classes from "./about.module.css";

const About = () => {
  return (
    <Fragment>
      <Head>
        <title>Nedyalko Draganov - Web Developer - About me</title>
        <meta
          name="description"
          content="Nedyalko Draganov - Web Developer - HTML CSS JavaScript React.js Next.js"
        />
      </Head>
      <div className={classes.about}>
        <h1>About</h1>
        <AboutText />
        <Toolkit />
      </div>
    </Fragment>
  );
};

export default About;
