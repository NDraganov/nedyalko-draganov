import NavigationLink from "./navigation-link";
import CloseIcon from "@mui/icons-material/Close";

import classes from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div>
      <div className={classes.sidebar}>
        <CloseIcon sx={{ fontSize: 30 }} />
        <nav>
          <ul>
            <NavigationLink href="/" title="Home page" text="Home" />
            <NavigationLink href="/about" title="About page" text="About" />
            <NavigationLink
              href="/portfolio"
              title="Portfolio page"
              text="Portfolio"
            />
          </ul>
        </nav>
      </div>
      <div className={classes.background}></div>
    </div>
  );
};

export default Sidebar;
