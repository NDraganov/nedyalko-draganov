import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";

import classes from "./sidebar.module.css";

const Sidebar = ({ style, click }) => {
  return (
    <div className={style}>
      <div className={classes.sidebar}>
        <CloseIcon sx={{ fontSize: 30 }} onClick={click} />
        <nav>
          <ul>
            <Link href="/" title="Home page" onClick={click}>
              Home
            </Link>
            <Link href="/about" title="About page" onClick={click}>
              About
            </Link>
            <Link href="/portfolio" title="Portfolio page" onClick={click}>
              Portfolio
            </Link>
          </ul>
        </nav>
      </div>
      <div className={classes.background}></div>
    </div>
  );
};

export default Sidebar;
