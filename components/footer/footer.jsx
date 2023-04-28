import Link from "next/link";
import NavigationBrand from "../navigation/navigation-brand";
import CurrentYear from "./current-year";
import { LinkedIn, GitHub } from "@mui/icons-material";

import classes from "./footer.module.css";

const Footer = () => {
  const linkedHref = "https://www.linkedin.com/in/nedyalko-draganov-12958a235/";
  const gitHref = "https://github.com/NDraganov";
  return (
    <footer className={classes.footer}>
      <div className={classes.section}>
        <Link href={linkedHref} title="LinkedIn" target="_blank">
          <LinkedIn sx={{ fontSize: 59 }} />
        </Link>
        <Link href={gitHref} title="GitHub" target="_blank">
          <GitHub sx={{ fontSize: 50 }} />
        </Link>
      </div>
      <div className={classes.section}>
        <NavigationBrand />
        <CurrentYear />
      </div>
    </footer>
  );
};

export default Footer;
