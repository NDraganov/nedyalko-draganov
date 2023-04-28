import NavigationBrand from "./navigation-brand";
import NavigationLink from "./navigation-link";

import classes from "./navigation.module.css";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <NavigationBrand />
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
