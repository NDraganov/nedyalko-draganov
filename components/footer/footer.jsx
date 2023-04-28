import Link from "next/link";
import NavigationBrand from "../navigation/navigation-brand";

import classes from "./footer.module.css";
import CurrentYear from "./current-year";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <Link
          href="https://www.linkedin.com/in/nedyalko-draganov-12958a235/"
          title="LinkedIn"
          target="_blank"
        ></Link>
        <Link
          href="https://github.com/NDraganov"
          title="GitHub"
          target="_blank"
        ></Link>
      </div>
      <div>
        <NavigationBrand />
        <CurrentYear />
      </div>
    </footer>
  );
};

export default Footer;
