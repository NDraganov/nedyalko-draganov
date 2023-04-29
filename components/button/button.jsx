import Link from "next/link";

import classes from "./button.module.css";

const Button = ({ href, title, text }) => {
  return (
    <div className={classes.button}>
      <Link href={href} title={title}>
        {text}
      </Link>
    </div>
  );
};

export default Button;
