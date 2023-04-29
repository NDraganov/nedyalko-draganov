import NavigationBrand from "./navigation-brand";
import NavigationLink from "./navigation-link";
import MenuIcon from "@mui/icons-material/Menu";

import classes from "./navigation.module.css";

const Navigation = ({ click }) => {
  return (
    <header className={classes.header}>
      <NavigationBrand />
      <MenuIcon
        className={classes.menu}
        sx={{ fontSize: 50 }}
        onClick={click}
      />
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
    </header>
  );
};

export default Navigation;
