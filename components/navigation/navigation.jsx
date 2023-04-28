import NavigationLink from "./navigation-link";

import classes from "./navigation.module.css";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <NavigationLink href="/" title="Home page" text="HOME" />
          <NavigationLink href="/about" title="About page" text="ABOUT" />
          <NavigationLink
            href="/portfolio"
            title="Portfolio page"
            text="PORTFOLIO"
          />
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
