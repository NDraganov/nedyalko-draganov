import { Fragment } from "react";
import Link from "next/link";
import {
  Code,
  MailOutline,
  InsertDriveFileOutlined,
} from "@mui/icons-material";

import classes from "./home-links.module.css";

const HomeLinks = () => {
  return (
    <Fragment>
      <div className={classes.buttons}>
        <div className={classes.first}>
          <Link href="/portfolio" title="See my work">
            <Code sx={{ fontSize: 30 }} /> See my work
          </Link>
        </div>
        <div className={classes.second}>
          <Link href="mailto:nedyalkodraganov90@gmail.com" title="Get in touch">
            <MailOutline sx={{ fontSize: 30 }} /> Get in touch
          </Link>
        </div>
        <div className={classes.third}>
          <Link href="/images/resume.pdf" target="_blank" title="Resume">
            <InsertDriveFileOutlined sx={{ fontSize: 26 }} /> Resume
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeLinks;
