import { Fragment } from "react";
import Intro from "../components/home-page/intro";

import classes from "./index.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <Fragment>
        <Intro />
      </Fragment>
    </div>
  );
};

export default Home;
