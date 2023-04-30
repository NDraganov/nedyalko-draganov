import Button from "../components/button/button";

import classes from "./404.module.css";

const Custom404 = () => {
  return (
    <div className={classes.page404}>
      <h1>404</h1>
      <h3>
        This page does <span>not</span> exist!
      </h3>
      <p>
        Please double check <span>URL</span> or return to{" "}
      </p>
      <Button href="/" title="Home page" text="Home page" />
    </div>
  );
};

export default Custom404;
