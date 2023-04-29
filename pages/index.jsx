import { Fragment } from "react";
import Head from "next/head";
import Intro from "../components/home-page/intro";

import classes from "./index.module.css";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Nedyalko Draganov Portfolio</title>
        <meta
          name="description"
          content="Nedyalko Draganov - Web Developer - I design and code beautiful and colourful ideas, yet responsive and UI/UX friendly."
        />
      </Head>
      <div className={classes.home}>
        <Intro />
      </div>
    </Fragment>
  );
};

export default Home;
