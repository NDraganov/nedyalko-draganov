import Link from "next/link";

import classes from "./navigation-link.module.css";

const NavigationLink = ({ href, title, text }) => {
  return (
    <li className={classes.link}>
      <Link href={href} title={title}>
        {text}
      </Link>
    </li>
  );
};

export default NavigationLink;
