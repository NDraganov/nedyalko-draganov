import Link from "next/link";
import {
  Close,
  HomeOutlined,
  InfoOutlined,
  FolderOutlined,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";

import classes from "./sidebar.module.css";
import NavigationBrand from "./navigation-brand";

const Sidebar = ({ style, click }) => {
  const linkedHref = "https://www.linkedin.com/in/nedyalko-draganov-12958a235/";
  const gitHref = "https://github.com/NDraganov";
  return (
    <div className={style}>
      <div className={classes.sidebar}>
        <div className={classes.svg}>
          <Close sx={{ fontSize: 30 }} onClick={click} />
        </div>
        <nav>
          <ul>
            <Link href="/" title="Home page" onClick={click}>
              <HomeOutlined sx={{ fontSize: 30 }} />
              Home
            </Link>
            <Link href="/about" title="About page" onClick={click}>
              <InfoOutlined sx={{ fontSize: 30 }} />
              About
            </Link>
            <Link href="/portfolio" title="Portfolio page" onClick={click}>
              <FolderOutlined sx={{ fontSize: 30 }} />
              Portfolio
            </Link>
          </ul>
        </nav>
        <div className={classes.footer}>
          <Link href={linkedHref} title="LinkedIn" target="_blank">
            <LinkedIn sx={{ fontSize: 59 }} />
          </Link>
          <NavigationBrand onClick={click} />
          <Link href={gitHref} title="GitHub" target="_blank">
            <GitHub sx={{ fontSize: 50 }} />
          </Link>
        </div>
      </div>
      <div className={classes.background}></div>
    </div>
  );
};

export default Sidebar;
