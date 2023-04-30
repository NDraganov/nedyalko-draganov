import Link from "next/link";

import classes from "./button.module.css";

const Button = ({ href, title, target, text }) => {
  return (
    <div className={classes.button}>
      <Link href={href} title={title} target={target}>
        {text}
      </Link>
    </div>
  );
};

export default Button;
