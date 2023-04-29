import { Fragment } from "react";
import Link from "next/link";
import { Code, MailOutline } from "@mui/icons-material";

import classes from "./home-links.module.css";

const HomeLinks = () => {
  return (
    <Fragment>
      <div className={classes.buttons}>
        <Link href="/portfolio" title="See my work">
          <Code sx={{ fontSize: 30 }} /> See my work
        </Link>
        <Link href="mailto: nedyalkodraganov90@gmail.com" title="Get in touch">
          <MailOutline sx={{ fontSize: 30 }} /> Get in touch
        </Link>
      </div>
    </Fragment>
  );
};

export default HomeLinks;
