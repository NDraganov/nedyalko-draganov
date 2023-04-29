import NavigationLink from "./navigation-link";
import CloseIcon from "@mui/icons-material/Close";

import classes from "./sidebar.module.css";

const Sidebar = ({ style, click }) => {
  return (
    <div className={style}>
      <div className={classes.sidebar}>
        <CloseIcon sx={{ fontSize: 30 }} onClick={click} />
        <nav>
          <ul>
            <NavigationLink
              href="/"
              title="Home page"
              text="Home"
              onClick={click}
            />
            <NavigationLink
              href="/about"
              title="About page"
              text="About"
              onClick={click}
            />
            <NavigationLink
              href="/portfolio"
              title="Portfolio page"
              text="Portfolio"
              onClick={click}
            />
          </ul>
        </nav>
      </div>
      <div className={classes.background}></div>
    </div>
  );
};

export default Sidebar;
